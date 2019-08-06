package org.teavm.libgdx.plugin;

import com.badlogic.gdx.math.Matrix4;
import org.reflections.Reflections;
import org.teavm.diagnostics.Diagnostics;
import org.teavm.libgdx.emu.Matrix4Emulator;
import org.teavm.libgdx.plugin.Annotations.Emulate;
import org.teavm.libgdx.plugin.Annotations.Replace;
import org.teavm.model.*;
import org.teavm.model.util.ModelUtils;
import org.teavm.parsing.ClassRefsRenamer;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class OverlayTransformer implements ClassHolderTransformer {
    private HashMap<String, Class<?>> emulations = new HashMap<>();
    private HashMap<String, Class<?>> replacements = new HashMap<>();
    private ReferenceCache referenceCache = new ReferenceCache();

    public OverlayTransformer(){
        Reflections reflections = new Reflections("org.teavm.libgdx.emu");

        Set<Class<?>> annotated = reflections.getTypesAnnotatedWith(Emulate.class);
        for(Class<?> type : annotated){
            Emulate em = type.getAnnotation(Emulate.class);
            Class<?> toEmulate = em.value();
            emulations.put(toEmulate.getTypeName(), type);
        }

        annotated = reflections.getTypesAnnotatedWith(Replace.class);
        for(Class<?> type : annotated){
            Replace em = type.getAnnotation(Replace.class);
            Class<?> toEmulate = em.value();
            replacements.put(toEmulate.getTypeName(), type);
        }
    }

    @Override
    public void transformClass(ClassHolder cls, ClassHolderTransformerContext context) {
        try{
            ClassReaderSource innerSource = context.getHierarchy().getClassSource();

            if(emulations.containsKey(cls.getName())){
                System.out.println("Emulating " + cls.getName());
                Class<?> emulated = emulations.get(cls.getName());
                List<MethodDescriptor> descList = new ArrayList<>();
                for (Method method : emulated.getDeclaredMethods()) {
                    Class[] classes = new Class[method.getParameterTypes().length + 1];

                    System.out.println("  method " + method.getName());

                    classes[classes.length-1] = method.getReturnType();
                    System.arraycopy(method.getParameterTypes(), 0, classes, 0, method.getParameterTypes().length);
                    descList.add(new MethodDescriptor(method.getName(), classes));
                }
                replaceMethods(cls, emulated, innerSource, descList);
            }
            else if (replacements.containsKey(cls.getName())) {
                System.out.println("Replacing " + cls.getName());
                Class<?> emulated = replacements.get(cls.getName());
                replaceClass(cls, innerSource.get(emulated.getName()));
            }
        }catch(Exception e){
            throw new RuntimeException("Error occurred transforming " + cls.getName(), e);
        }
    }

    private void replaceMethods(ClassHolder cls, Class<?> emuType, ClassReaderSource innerSource,
            List<MethodDescriptor> descList) {
        ClassReader emuCls = innerSource.get(emuType.getName());
        for (MethodDescriptor methodDesc : descList) {
            if(cls.getMethod(methodDesc) != null){
                cls.removeMethod(cls.getMethod(methodDesc));
            }
            cls.addMethod(ModelUtils.copyMethod(emuCls.getMethod(methodDesc)));
        }
    }

    private void replaceClass(final ClassHolder cls, final ClassReader emuCls) {
        ClassRefsRenamer renamer = new ClassRefsRenamer(referenceCache, preimage ->
                preimage.equals(emuCls.getName()) ? cls.getName() : preimage);
        for (FieldHolder field : cls.getFields().toArray(new FieldHolder[0])) {
            if (cls.getName().contains("Matrix4"))
                System.out.println("  field rem " + field.getName());

            cls.removeField(field);
        }
        for (MethodHolder method : cls.getMethods().toArray(new MethodHolder[0])) {
            if (cls.getName().contains("Matrix4"))
                System.out.println("  method rem " + method.getName());
            cls.removeMethod(method);
        }
        for (FieldReader field : emuCls.getFields()) {
            if (cls.getName().contains("Matrix4"))
                System.out.println("  field add " + field.getName());

            cls.addField(ModelUtils.copyField(field));
        }
        for (MethodReader method : emuCls.getMethods()) {
            Matrix4 m;
            if (cls.getName().contains("Matrix4"))
                System.out.println("  method add " + method.getName());
            cls.addMethod(renamer.rename(ModelUtils.copyMethod(method)));
        }
    }

    private void transformMatrix(ClassHolder cls, ClassReaderSource innerSource) {
        List<MethodDescriptor> descList = new ArrayList<>();
        descList.add(new MethodDescriptor("inv", float[].class, boolean.class));
        descList.add(new MethodDescriptor("mul", float[].class, float[].class, void.class));
        descList.add(new MethodDescriptor("prj", float[].class, float[].class, int.class, int.class, int.class,
                void.class));
        replaceMethods(cls, Matrix4Emulator.class, innerSource, descList);
        ClassReader emuClass = innerSource.get(Matrix4Emulator.class.getName());
        cls.addMethod(ModelUtils.copyMethod(emuClass.getMethod(new MethodDescriptor("matrix4_det", float[].class,
                float.class))));
        cls.addMethod(ModelUtils.copyMethod(emuClass.getMethod(new MethodDescriptor("matrix4_proj", float[].class,
                float[].class, int.class, void.class))));
    }
}

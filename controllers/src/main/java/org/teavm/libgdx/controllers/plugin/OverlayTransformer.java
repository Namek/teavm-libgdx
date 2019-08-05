package org.teavm.libgdx.controllers.plugin;

import com.badlogic.gdx.controllers.Controllers;
import org.teavm.diagnostics.Diagnostics;
import org.teavm.libgdx.controllers.emu.ControllersEmulator;
import org.teavm.model.*;
import org.teavm.model.util.ModelUtils;
import org.teavm.parsing.ClassRefsRenamer;

public class OverlayTransformer implements ClassHolderTransformer {
    ReferenceCache referenceCache = new ReferenceCache();

    @Override
    public void transformClass(ClassHolder cls, ClassHolderTransformerContext ctx) {
        ClassReaderSource innerSource = ctx.getHierarchy().getClassSource();

        if (cls.getName().equals(Controllers.class.getName())) {
            transformControllers(cls, innerSource);
        }
    }

    private void transformControllers(final ClassHolder cls, ClassReaderSource classSource) {
        MethodDescriptor desc = new MethodDescriptor("initialize", void.class);
        cls.removeMethod(cls.getMethod(desc));
        ClassReader patchClass = classSource.get(ControllersEmulator.class.getName());
        MethodHolder patch = ModelUtils.copyMethod(patchClass.getMethod(desc));
        ClassRefsRenamer renamer = new ClassRefsRenamer(referenceCache, preimage -> {
            if (preimage.equals(ControllersEmulator.class.getName())) {
                return Controllers.class.getName();
            }
            return preimage;
        });
        cls.addMethod(renamer.rename(patch));
    }
}

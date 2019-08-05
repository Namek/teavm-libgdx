package org.teavm.libgdx;

import com.badlogic.gdx.Files;
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.utils.GdxRuntimeException;
import org.teavm.jso.browser.Storage;

/**
 *
 * @author Alexey Andreev
 */
public class TeaVMFiles implements Files {
    public static final Storage localStorage = Storage.getLocalStorage();

    @Override
    public FileHandle getFileHandle(String path, FileType type) {
        if (type != FileType.Internal) {
            throw new GdxRuntimeException("FileType '" + type + "' not supported in GWT backend");
        }
        return new TeaVMFileHandle(path, type);
    }

    @Override
    public FileHandle classpath(String path) {
        return new TeaVMFileHandle(path, FileType.Classpath);
    }

    @Override
    public FileHandle internal(String path) {
        return new TeaVMFileHandle(path, FileType.Internal);
    }

    @Override
    public FileHandle external(String path) {
        throw new GdxRuntimeException("External files not supported in GWT backend");
    }

    @Override
    public FileHandle absolute(String path) {
        throw new GdxRuntimeException("Absolute files not supported in GWT backend");
    }

    @Override
    public FileHandle local(String path) {
        throw new GdxRuntimeException("local files not supported in GWT backend");
    }

    @Override
    public String getExternalStoragePath() {
        return null;
    }

    @Override
    public boolean isExternalStorageAvailable() {
        return false;
    }

    @Override
    public String getLocalStoragePath() {
        return null;
    }

    @Override
    public boolean isLocalStorageAvailable() {
        return false;
    }
}

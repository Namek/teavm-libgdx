package org.teavm.libgdx.superjumper;

import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.xml.Document;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.libgdx.TeaVMApplication;
import org.teavm.libgdx.TeaVMApplicationConfig;

import com.badlogicgames.superjumper.SuperJumper;

public class TeaVMLauncher {
    public static void main(String[] args) {
        Window window = Window.current();
        Document document = window.getDocument();
        TeaVMApplicationConfig config = new TeaVMApplicationConfig();
        config.setCanvas((HTMLCanvasElement)document.getElementById("superjumper-canvas"));
        new TeaVMApplication(new SuperJumper(), config).start();
    }
}

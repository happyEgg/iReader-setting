package com.myproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.dispatcher.rnseekbar.RNSeekBarPackage; // <-- import
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import android.os.Bundle;
import com.facebook.react.ReactRootView;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.rnfs.RNFSPackage; // <------- add package
import com.robinpowered.react.battery.DeviceBatteryPackage;
import com.myproject.ScreenBrightnessPackage;

public class MainActivity extends ReactActivity implements DefaultHardwareBackBtnHandler{



    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyProject";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

   /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new RNSeekBarPackage(),
        new RNFSPackage(),
        new DeviceBatteryPackage(this),
        new ScreenBrightnessPackage(this, 1)
      );
    }
}

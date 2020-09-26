Projeto criado para treinamento do uso do React Native com Detox.

Documentação atualizada do Detox https://github.com/wix/Detox

# Tutorial basico de configuração:

- Inciar a estrutura basica do Detox com Jest (caso não exista):
detox init -r jest


**CONFIGURACAO PARA IOS:** https://github.com/wix/Detox/blob/master/docs/Introduction.Ios.md

- applesimutils
brew tap wix/brew
brew install applesimutils

"ios": {
  "type": "ios.simulator",
  "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/exemple.app",
  "build": "xcodebuild -workspace ios/exemple.xcworkspace -scheme exemple -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
  "device": {
    "type": "iPhone 11"
  }
},

Para ver o Schema / build Config / Targets do projeto
cd ios/ xcodebuild -list

Para ver SDK do projeto
cd ios/ xcodebuild -showsdks

**CONFIGURACAO PARA ANDROID:** https://github.com/wix/Detox/blob/master/docs/Introduction.Android.md

"android": {
  "type": "android.emulator",
  "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
  "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
  "device": {
    "avdName": "Nexus_5X_API_28"
  }
}

- In your root buildscript (i.e. build.gradle), register both google() and detox as repository lookup points in all projects:

// Note: add the 'allproject' section if it doesn't exist
allprojects {
    repositories {
        // ...
        google()
        maven {
            // All of Detox' artifacts are provided via the npm module
            url "$rootDir/../node_modules/detox/Detox-android"
        }
    }
}

- In your app's buildscript (i.e. app/build.gradle) add this in dependencies section:

dependencies {
	  // ...
    androidTestImplementation('com.wix:detox:+')
}


- add this to the defaultConfig subsection:

android {
  // ...
  
  defaultConfig {
      // ...
      testBuildType System.getProperty('testBuildType', 'debug')  // This will later be used to control the test apk build type
      testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
  }
}

**Please be aware that the minSdkVersion needs to be at least 18.**


- If your project does not already support Kotlin, add the Kotlin Gradle-plugin to your classpath in the root build-script (i.e.android/build.gradle):

buildscript {
    // ...
    ext.kotlinVersion = '1.3.72' // (check what the latest version is!)
    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
    }
}


- Add the file android/app/src/androidTest/java/com/[your.package]/DetoxTest.java

// Replace "com.example" here and below with your app's package name from the top of MainActivity.java
package com.example;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule
    // Replace 'MainActivity' with the value of android:name entry in 
    // <activity> in AndroidManifest.xml
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        DetoxConfig detoxConfig = new DetoxConfig();
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
        detoxConfig.rnContextLoadTimeoutSec = (com.example.BuildConfig.DEBUG ? 180 : 60);

        Detox.runTests(mActivityRule, detoxConfig);
    }
}


- Enable clear-text (unencrypted) traffic for Detox
In an xml resource file, e.g. android/app/src/main/res/xml/network_security_config.xml

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>


- In the app's AndroidManifest.xml

<manifest>
  <application 
        ...
        android:networkSecurityConfig="@xml/network_security_config">
  </application>
</manifest>
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../../storage'
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

class AnalyticsManager {

    init = (screenName) => {
        try {
            if (screenName) {
                // Screen transition delay 500ms
                setTimeout(() => {
                    analytics().logScreenView({
                        screen_name: screenName,
                        screen_class: screenName,
                    });
                    LogTracker.debug("Analytics : screen", screenName);
                    this.log("view_section", { "section_name": screenName });
                }, 500);
            }
        } catch (e) {
            // Ignored exception
        }
    };

    log = (eventName, valueObject) => {
        LogTracker.debug("Analytics : log", eventName, valueObject);
        analytics().logEvent(eventName, valueObject);
    }
}

export default new AnalyticsManager();
# CalgaryHacks2022

Dev Dependencies:

1. Input secret Google API Key in GoogleMap.js (key in Discord)
   GoogleMap.js (`app/src/components/GoogleMap.js`)

```js
destination={coordinates[1]}
apikey={'<API_KEY>'} // insert your API Key here
strokeWidth={4}
```

2. Under `</activity>` in `AndroidManifest.xml` add those 2 lines and insert API_KEY.
   AndroidManifest.xml (`app/android/app/src/main/AndroidManifest.xml`)

```js
</activity>
<meta-data android:name="com.google.android.geo.API_KEY" android:value="<API_KEY>"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```

2. `npm i react-native-maps react-native-webview react-native-maps-directions react-native-gesture-bottom-sheet`
3. `npx react-native link react-native-maps`

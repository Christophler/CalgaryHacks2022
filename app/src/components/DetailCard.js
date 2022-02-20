
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const stylesTemp = StyleSheet.create({
    detailCard: {
        width: 350,
        height: 120,
        backgroundColor: '#E6DDFF',
        borderRadius: 11,
        flexDirection: 'row',
        paddingLeft: 10, paddingRight: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconImage: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 24,
        fontweight: 'bold',
    },
    timeText: {
        fontSize: 18,
    },
    moneyText: {
        fontSize: 24,
    }
});

/**
 * 
 * Usage Example:
 * <DetailCard 
 *  imageObject={require('../Assets/bike.png')} 
 *  activityName="Bike" 
 *  timeString="5 min" 
 *  costString="$0" 
 *  backgroundColor="#E5E5E5"
 * />
 * 
 */
const DetailCard = ({ imageObject, activityName, timeString, costString, backgroundColor }) => {
    return (
        <View style={{ ...stylesTemp.detailCard, backgroundColor: backgroundColor }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <View style={stylesTemp.imageContainer}>
                    <Image style={stylesTemp.iconImage} source={imageObject} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={stylesTemp.titleText}>{activityName}</Text>
                    <Text style={stylesTemp.timeText}>{timeString}</Text>
                </View>
            </View>
            <Text style={stylesTemp.moneyText}>{costString}</Text>
        </View>
    );
}

export default DetailCard;
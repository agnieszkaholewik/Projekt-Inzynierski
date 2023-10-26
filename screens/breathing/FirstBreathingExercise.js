import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const circleWidth = width / 2;

function FirstBreathingExercise() {
    const move = useRef(new Animated.Value(0)).current;
    const inhaleOpacity = useRef(new Animated.Value(0)).current;
    const holdOpacity = useRef(new Animated.Value(0)).current;
    const exhaleOpacity = useRef(new Animated.Value(0)).current;


    Animated.loop(
        Animated.sequence([
            Animated.parallel([
                Animated.timing(inhaleOpacity, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(move, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
            ]),

            Animated.timing(inhaleOpacity, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),

            Animated.parallel([
                Animated.timing(holdOpacity, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.delay(7000)

            ]),

            Animated.timing(holdOpacity, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(exhaleOpacity, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(move, {
                    toValue: 0,
                    duration: 8000,
                    useNativeDriver: true,
                }),
            ]),

            Animated.timing(exhaleOpacity, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),

        ])
    ).start();

    const translate = move.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circleWidth / 6],
    });

    return (
        <View>
            <View style={styles.container}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
                    const rotation = move.interpolate({
                        inputRange: [0, 1],
                        outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
                    });

                    return (
                        <Animated.View
                            key={item}
                            style={{
                                opacity: 0.3,
                                backgroundColor: '#F78CA2',
                                width: circleWidth,
                                height: circleWidth,
                                borderRadius: circleWidth / 2,
                                ...StyleSheet.absoluteFill,
                                transform: [
                                    { rotateZ: rotation },
                                    { translateX: translate },
                                    { translateY: translate },
                                ],
                            }}
                        ></Animated.View>
                    );
                })}
                <Animated.View
                    style={{
                        width: circleWidth,
                        height: circleWidth,
                        ...StyleSheet.absoluteFill,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: inhaleOpacity,
                    }}
                >
                    <Text style={styles.text}>Inhale</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        width: circleWidth,
                        height: circleWidth,
                        ...StyleSheet.absoluteFill,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: holdOpacity,
                    }}
                >
                    <Text style={styles.text}>Hold</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        width: circleWidth,
                        height: circleWidth,
                        ...StyleSheet.absoluteFill,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: exhaleOpacity,
                    }}
                >
                    <Text style={styles.text}>Exhale</Text>
                </Animated.View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 530 }}><Text style={{
                fontSize: 18,
                fontWeight: '500',
                color: 'black',
                textAlign: 'center'
            }} >Repeat at least 3 times.</Text></View>
        </View>
    );
}

export default FirstBreathingExercise;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: width / 4,
        top: height / 4,
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        textShadowColor: '#2C3333',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center',
    },
});

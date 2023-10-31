import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { GameEngine } from "react-native-game-engine";
import React, { useRef, useState } from "react";
import Head from '../components/MiniGame/Head';
import Apples from '../components/MiniGame/Apples';
import Tail from '../components/MiniGame/Tail';
import MiniGameLoop from '../systems/MiniGameLoop';


function MiniGameScreen() {
    const BoardSize = 15 * 21;
    const engine = useRef(null);
    const randomPositions = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const [isGameRunning, setIsGameRunning] = useState(true);
    const resetGame = () => {
        engine.current.swap({
            head: {
                position: [0, 0],
                size: 20,
                updateFrequency: 12,
                nextMove: 10,
                xspeed: 0,
                yspeed: 0,
                renderer: <Head />,
            },
            apples: {
                position: [
                    randomPositions(0, 15 - 1),
                    randomPositions(0, 15 - 1),
                ],
                size: 20,
                updateFrequency: 10,
                nextMove: 10,
                xspeed: 0,
                yspeed: 0,
                renderer: <Apples />,
            },
            tail: {
                size: 20,
                elements: [],
                renderer: <Tail />,
            },
        });
        setIsGameRunning(true);
    };
    return (
        <View style={styles.container}>
            <GameEngine
                ref={engine}
                style={{
                    width: BoardSize,
                    height: BoardSize,
                    flex: null,
                    backgroundColor: "white",
                    borderColor: 'black',
                    borderWidth: 3,
                    borderRadius: 10,
                    
                }}
                entities={{
                    head: {
                        position: [0, 0],
                        size: 20,
                        updateFrequency: 10,
                        nextMove: 10,
                        xspeed: 0,
                        yspeed: 0,
                        renderer: <Head />,
                    },
                    apples: {
                        position: [
                            randomPositions(0, 15 - 1),
                            randomPositions(0, 15 - 1),
                        ],
                        size: 20,
                        renderer: <Apples />,
                    },
                    tail: {
                        size: 20,
                        elements: [],
                        renderer: <Tail />,
                    },
                }}
                systems={[MiniGameLoop]}
                running={isGameRunning}
                onEvent={(e) => {
                    switch (e) {
                        case "game-over":
                            alert("Game over!");
                            setIsGameRunning(false);
                            return;
                    }
                }}
            />
            <View style={styles.controls}>
                <View style={styles.controllerRow}>
                    <TouchableOpacity onPress={() => engine.current.dispatch("move-up")}>
                        <View style={styles.buttons} />
                    </TouchableOpacity>
                </View>
                <View style={styles.controllerRow}>
                    <TouchableOpacity
                        onPress={() => engine.current.dispatch("move-left")}
                    >
                        <View style={styles.buttons} />
                    </TouchableOpacity>
                    <View style={[styles.buttons, { backgroundColor: null }]} />
                    <TouchableOpacity
                        onPress={() => engine.current.dispatch("move-right")}
                    >
                        <View style={styles.buttons} />
                    </TouchableOpacity>
                </View>
                <View style={styles.controllerRow}>
                    <TouchableOpacity
                        onPress={() => engine.current.dispatch("move-down")}
                    >
                        <View style={styles.buttons} />
                    </TouchableOpacity>
                </View>
            </View>
            {!isGameRunning && (
                <TouchableOpacity onPress={resetGame}>
                    <Text
                        style={{
                            color: "black",
                            marginTop: 40,
                            fontSize: 22,
                            padding: 10,
                            backgroundColor: "#b0c4de",
                            borderColor:'black',
                            
                            borderWidth:2
                            
                        }}
                    >
                        Start New Game
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MiniGameScreen;

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    controls: {
        marginTop: 50,
        
      },
      controllerRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
        
      },
      buttons: {
        backgroundColor: "#778899",
        width: 65,
        height: 65,
        borderRadius:10,
        borderColor:'black',
        borderWidth:2
      },
})
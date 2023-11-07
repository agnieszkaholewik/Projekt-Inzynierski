import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function Exercise({ name, imageSource, duration, onComplete }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}>{name}</Text>
      <Image source={imageSource} style={styles.exerciseImage} />
      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          key={name} 
          isPlaying
          duration={duration}
          colors={['#E966A0', '#FFBDF7', '#D4ADFC', '#FEA1A1']}
          colorsTime={[duration, duration * 0.67, duration * 0.33, 0]}
          size={200}
          strokeWidth={20}
          onComplete={onComplete}
        >
          {({ remainingTime }) => (
            <Text style={styles.countdownText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}

function Warmup() {
  const [isCountdownVisible, setCountdownVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);

  const handleStartClick = () => {
    setCountdownVisible(true);
  };

  const handleTimeElapsed = () => {
    setCountdownVisible(false);
    setCurrentExercise('Jumping Jacks');
  };

  const handleExerciseComplete = () => {
    if (currentExercise === 'Jumping Jacks') {
      setCurrentExercise('Squats');
    } else if (currentExercise === 'Squats') {
      setCurrentExercise('Mountain Climbers');
    } else if (currentExercise === 'Mountain Climbers') {
      setCurrentExercise('Plank');
    } else {
      // If Plank is completed, go back to the default screen
      setCurrentExercise(null);
    }
  };

  return (
    <View style={styles.container}>
      {isCountdownVisible ? (
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={['#b0c4de', '#FFBDF7', '#D4ADFC', '#FEA1A1']}
          colorsTime={[5, 3, 1, 0]}
          size={250}
          strokeWidth={20}
          onComplete={handleTimeElapsed}
        >
          {({ remainingTime }) => <Text style={styles.countdownText}>READY?</Text>}
        </CountdownCircleTimer>
      ) : currentExercise ? (
        <Exercise
          name={currentExercise}
          imageSource={
            currentExercise === 'Jumping Jacks'
              ? require('../../assets/exercises/jumpingjacks.png')
              : currentExercise === 'Squats'
              ? require('../../assets/exercises/squats.png')
              : currentExercise === 'Mountain Climbers'
              ? require('../../assets/exercises/climber.png')
              : require('../../assets/exercises/planks.png')
          }
          duration={2}
          onComplete={handleExerciseComplete}
        />
      ) : (
        <Pressable
          android_ripple={{ opacity: 0.5 }}
          style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : styles.button]}
          onPress={handleStartClick}
        >
          <Text style={styles.startButtonText}>START</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#b0c4de',
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonPressed: {
        opacity: 0.5,
      },
      startButtonText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        textShadowColor: '#2C3333',
        textShadowRadius: 1.7,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center',
      },
      countdownText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
      },
      exerciseContainer: {
        alignItems: 'center',
        justifyContent:"center",
        flex: 1,
      },
      exerciseImage: {
        width: 150,
        height: 150,
      },
      exerciseText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        padding: 20,
      },
      countdownContainer: {
        marginTop: 70,
      },
});

export default Warmup;

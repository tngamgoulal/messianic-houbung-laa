import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SongDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Song Title</Text>
            <Text style={styles.lyrics}>Here are the lyrics of the song...</Text>
            <View style={styles.buttonContainer}>
                <Button title="Back" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={() => navigation.navigate('NextSongScreen')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Dark mode support
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
    },
    lyrics: {
        color: '#FFF',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
});

export default SongDetailScreen;

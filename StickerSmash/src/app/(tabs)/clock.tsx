import { View, Text, StyleSheet, Platform } from 'react-native';
import { useEffect, useState } from 'react';

export default function ClockScreen() {
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      
      const optionsDate: Intl.DateTimeFormatOptions = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      };
      setDateString(now.toLocaleDateString('ru-RU', optionsDate));

      
      const optionsTime: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      };
      setTimeString(now.toLocaleTimeString('ru-RU', optionsTime));
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, );

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{timeString}</Text>
      <Text style={styles.date}>{dateString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    color: '#aaa',
  },
});

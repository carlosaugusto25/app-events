import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Home() {

  function handleParticipantAdd() {
    console.log('você adicionou um participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 12 de dezembro de 2023</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Nome do paricipante' placeholderTextColor={'#6b6b6b'} />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
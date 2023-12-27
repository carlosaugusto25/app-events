import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      console.log('adicionou')
      return Alert.alert('Participante existe', 'Já existe um participante na lista com este nome.')
    }
    setParticipants([...participants,participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: ()=>setParticipants(preState => preState.filter(part=>part!=name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 12 de dezembro de 2023</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do paricipante' 
          placeholderTextColor={'#6b6b6b'} 
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* exemplo de flatlist */}
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={()=>(
          <Text style={styles.emptyList}>
            Ninguém chegou ao evento ainda? Adicione participantes ao evento.
          </Text>
        )}
      />

      {/* exemplo de scrollview */}
      {/* <ScrollView>
        {
          participants.map((part, index) => (
            <Participant key={index} name={part} onRemove={() => handleParticipantRemove(part)} />
          ))
        }
      </ScrollView> */}

    </View>
  )
}
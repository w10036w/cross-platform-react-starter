import { AppRegistry } from 'react-native'
import app from './src/app'
import { name } from './app.json'

AppRegistry.registerComponent(name, () => app)

AppRegistry.runApplication(name, {
  rootTag: document.getElementById('root'),
})

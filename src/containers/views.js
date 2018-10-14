import { connect } from 'react-redux'
import View from '../components/view.js'

const mapStateToProps = state => ({
    showInventory: state.visibility.inventory
})

const Views = connect(
    mapStateToProps
)(View)

export default Views

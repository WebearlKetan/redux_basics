import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { addToCart } from '../Services/Actions/actions'

const mapStateToProps = state => ({
  cardData: state
})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, { Component } from 'react'

import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

import Wrapper from '../components/Wrapper'

export default class extends Component {

    render () {
        return(
            <Subscribe to={ [ AppContainer ]}>
                {
                    (app) => {

                        return(
                            <div className='Index'>
                                <Wrapper>

                                    <p>{ app.state.user.name }</p>

                                    <button onClick={ () => app.setName('updated') }>setName('updated')</button>

                                </Wrapper>
                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}
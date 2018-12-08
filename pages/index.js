import React, { Component } from 'react'

import { Grommet, Button } from 'grommet'
import { Add } from 'grommet-icons'

import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

import Wrapper from '../components/Wrapper'

import logo from '../_.png'

export default class extends Component {

    render () {
        return(
            <Subscribe to={ [ AppContainer ]}>
                {
                    (app) => {

                        return(
                        <Grommet>
                            <Wrapper>

                                <p>{ app.state.user.name }</p>
                                <img src={ logo } />

                                <Button icon={<Add />} label="Add" onClick={ () => app.setName('updated') } primary />

                            </Wrapper>
                        </Grommet>
                        )

                    }
                }
            </Subscribe>
        )
    }

}
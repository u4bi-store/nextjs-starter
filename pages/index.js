import React, { Component } from 'react'
import Link from 'next/link'

import { Button } from 'antd'

import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

export default class extends Component {

    render () {
        return(
            <Subscribe to={ [ AppContainer ]}>
                {
                    (app) => {

                        return(
                            <div className='Index'>
                                <p>{ app.state.title }</p>
                                <p>{ app.state.user.name }</p>
                                <p>{ app.state.user.level }</p>

                                <Button onClick={ () => app.setName('updated') }>setName('updated')</Button>
                                
                                <ul>
                                    <li><Link href='/b' as='/a'><a>a</a></Link></li>
                                    <li><Link href='/a' as='/b'><a>b</a></Link></li>
                                    <li><Link href='/posts/2' as='/posts/2'><a>post #2</a></Link></li>
                                </ul>
                                
                                <style jsx>{``}</style>

                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}
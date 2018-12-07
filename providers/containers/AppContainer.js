import { Container } from 'unstated'
import immutable from 'immutability-helper'

export default class AppContainer extends Container {

    state = {
        title : 'blog post',
        user : {
            name : 'u4bi',
            level : 1
        }
    }

    setTitle = title => {

        this.setState(immutable(this.state, {
            title : {
                $set : title
            }
        }))

    }

    setName = name => {

        this.setState(immutable(this.state, {
            user : {
                name : {
                    $set : name
                }
            }
        }))

    }

}
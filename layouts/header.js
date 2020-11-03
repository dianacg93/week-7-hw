import {UserProfile} from '../components/user-profiles.js'

class Header {
    loadHeader(){
        const userProfile = new UserProfile();

        userProfile.loadUserProfile();

        console.log('Header component is loaded...')
    }
}

export {Header}
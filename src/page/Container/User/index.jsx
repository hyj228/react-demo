import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
class User extends Component {
  render() {
    return (
      <div className="App">
        <Picker set='emojione' />
        <Picker onSelect={this.addEmoji} />
        <Picker title='Pick your emoji…' emoji='point_up' />
        {/* <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} /> */}
        <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />
      </div>
    );
  }
}

export default User;

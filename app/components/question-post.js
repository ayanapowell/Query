import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    favoritePost(post) {
      this.get('favorites').add(post);
    }
  }
});

import React from 'react';
import { View, Text, FlatList } from 'react-native-web';
import { view } from 'react-easy-state';
import randomColor from 'randomcolor';

import './../../styles/input.css';
import { accentColor } from '../../config/Colors';
import TwitterIcon from './../../assets/images/twitter-icon.png';
import { creditsArray } from '../../config/Constants';

const styles = {
  rootContainer: {
    width: '100%',
    height: '100%',
    marginTop: 25,
  },
  shortcutsContainer: {
    width: '100%',
    // height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

class MoreTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: creditsArray,
    };
  }

  _onClickItem = item => {
    window.open(item.link, '_blank');
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <View stye={{ marginTop: 15 }}>
          <Text className="font" style={{ color: accentColor, marginBottom: 15 }}>
            Keyboard Shortcuts
          </Text>
          <View style={styles.shortcutsContainer}>
            <Text className="font">Play/Pause [Space]</Text>
            <Text className="font">Fullscreen [F]</Text>
            <Text className="font">Volume [Arrow Up/Down]</Text>
            <Text className="font">Mute [M]</Text>
            <Text className="font">Next [N]</Text>
            <Text className="font">Previous [P]</Text>
          </View>
        </View>

        <View>
          <Text className="font" style={{ color: accentColor, marginTop: 15 }}>
            Why?
          </Text>
          <Text
            className="font"
            style={{
              cursor: 'pointer',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#000',
              marginTop: 10,
              marginBottom: 5,
            }}
            onClick={() => {
              window.open('https://goo.gl/eust6P');
            }}
          >
            https://www.reddit.com/r/Music/comments/8sxjxo/rey_reimagined_youtube_music_player_for_desktop_i
          </Text>
        </View>

        <View>
          <Text className="font" style={{ color: accentColor, marginTop: 15 }}>
            Developer
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onClick={() => {
              window.open('https://twitter.com/_skris');
            }}
          >
            <Text
              className="font"
              style={{
                cursor: 'pointer',
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              Sai Krishna &nbsp;
            </Text>
            <img src={TwitterIcon} style={{ cursor: 'pointer', width: 24, height: 24 }} alt="_skris" />
          </View>
        </View>

        <Text className="font" style={{ color: accentColor, marginTop: 15 }}>
          Credits
        </Text>
        <FlatList
          style={{ marginTop: 15 }}
          keyExtractor={item => item.name}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              onClick={() => this._onClickItem(item)}
              className="song-item-container"
              style={{
                paddingLeft: 10,
                borderLeftWidth: 4,
                borderLeftStyle: 'solid',
                borderLeftColor: randomColor({
                  luminosity: 'bright',
                  hue: 'blue',
                }),
              }}
            >
              <Text className="font" numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default view(MoreTab);

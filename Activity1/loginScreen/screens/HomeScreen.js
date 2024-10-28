import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => console.log('Menu pressed')}>
            <Icon name="menu-outline" size={35} color="#808080" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <Icon name="search-outline" size={32} color="#808080" />
          </TouchableOpacity>
        </View>

        {/* Line under the icons */}
        <View style={styles.line} />

        {/* Suggestions text */}
        <Text style={styles.suggestionsText}>Suggestions</Text>

        {/* Three buttons under "Suggestions" */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.box, styles.box1]} />
          <TouchableOpacity style={[styles.box, styles.box2]} />
          <TouchableOpacity style={[styles.box, styles.box3]} />
        </View>

        {/* Two buttons at the bottom */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.box, styles.box4]} />
          <TouchableOpacity style={[styles.box, styles.box5]} />
        </View>

        {/* Create Post text */}
        <Text style={styles.createPostText}>Create Post</Text>

        {/* Share Knowledge Button under Create Post */}
        <TouchableOpacity style={styles.shareButton}>
          <View style={styles.profileCircle} />
          <Text style={styles.placeholderText}>Share your knowledge</Text>
          <TouchableOpacity style={styles.pdfButton}>
            <Icon name="document-text-outline" size={20} color="#FFF" />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Bookmark text under Share Knowledge Button */}
        <Text style={styles.bookmarkText}>Bookmark</Text>

        {/* Large Square Box with Content under Bookmark */}
        <View style={styles.largeBox}>
          <View style={styles.bookmarkContent}>
            {/* Circle image */}
            <View style={styles.imageCircle} />

            {/* Text container for bookmark title and name */}
            <View style={styles.textContainer}>
              <Text style={styles.bookmarkTitle}>Introduction to Javascript</Text>
              <Text style={styles.bookmarkName}>Philip Jomer Matias</Text>
            </View>
      
            {/* Three dots icon */}
            <TouchableOpacity onPress={() => console.log('Menu pressed')}>
              <Icon name="ellipsis-horizontal" size={25} color="#808080" />
            </TouchableOpacity>
          </View>

          {/* Image below the text */}
          <Image
            source={{ uri: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1024,q_auto' }}
            style={styles.bookmarkImage}
            resizeMode="cover"
          />

          {/* Information text below the image */}
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </Text>

          {/* Button and Icon Row */}
          <View style={styles.buttonIconRow}>
            <View style={styles.leftButtons}>
              <TouchableOpacity>
                <Text style={styles.textButton}>Leave</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textButton}>View</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="star-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="bookmark-outline" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bookmark-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="black" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9FC',
    paddingTop: 50,
  },
  scrollContent: {
    paddingBottom: 80, // Additional space at the bottom for the navigation bar
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#808080',
    marginHorizontal: 25,
  },
  suggestionsText: {
    fontSize: 23,
    color: '#333',
    marginTop: 15,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 15,
  },
  box: {
    height: 30,
    borderRadius: 50,
  },
  box1: {
    backgroundColor: '#DF3821',
    flex: 1,
    marginRight: 10,
  },
  box2: {
    backgroundColor: '#000000',
    flex: 1.5,
    marginHorizontal: 1,
  },
  box3: {
    backgroundColor: '#648DCB',
    flex: 1,
    marginLeft: 10,
  },
  box4: {
    backgroundColor: '#B9E185',
    flex: 1,
    marginRight: 10,
    height: 30,
  },
  box5: {
    backgroundColor: '#FBEB78',
    flex: 1,
    marginLeft: 1,
    height: 30,
  },
  createPostText: {
    fontSize: 23,
    color: '#333',
    marginLeft: 25,
    marginTop: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 25,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#648DCB',
    marginRight: 10,
  },
  placeholderText: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
  },
  pdfButton: {
    width: 30,
    height: 30,
    backgroundColor: '#DF3821',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  bookmarkText: {
    fontSize: 23,
    color: '#333',
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  largeBox: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    padding: 15,
  },
  bookmarkContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#648DCB',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bookmarkTitle: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  bookmarkName: {
    fontSize: 14,
    color: '#666',
  },
  bookmarkImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  leftButtons: {
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    color: 'black',
    marginRight: 20,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
  navigationBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#B9E185',
    elevation: 5,
  },
  navItem: {
    marginTop: 5,
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: 'black',
  },
});

export default App;

const About = () => {
  return (
    <div id="About">
      <h2>About</h2>
      <p className="text" >
        This is an app for React Course tought by Margit Tennosaar at Business College Helsinki. It has a functionality of adding and removing likes, removing cards and a search. Different animals can be browsed by category and each animal has its own page behind "See More".
        <br />
        <br />
        This exercise taught me the basics of React, especially how to organize code in Components, the way to use routes and understanding the whole as it all comes together in the App. Making a changing, category based header background was something extra I wanted to add to my Zoo app as I was excited about the functionality of params. My school mates Alex and Adel helped me when I was unsure where to put the function for my changing background url. Thanks to that I have a better understanding what goes to the Components. The randomized images used in the page are from unsplash.com.
        <br />
        <br />
        I also wanted to have a little snippets of information for the animals so I did some thorough searching and used the help of Unelma-Code Translator AI to get the extracts from the Wikipedia API. It turns out to be a wonderful resource.
      </p>
    </div>
  );
}

export default About;
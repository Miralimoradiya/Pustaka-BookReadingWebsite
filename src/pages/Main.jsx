import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const stories = [
    {
      id: 6755373536641592,
      rank: 1,
      title: "THE DETECTIVE (completed)",
      parts: 116,
      rating: 4.9,
      readers: "39K+",
      time: "9 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi/cover?pratilipiId=6755373536641592&version=3e4b5b2f-6ea1-46de-8651-49c3dd4e1838&quality=high&type=webp",
    },
    {
      id: 103147,
      rank: 2,
      title: "The unforgettable horror night || COMPLETED",
      parts: 13,
      rating: 4.4,
      readers: "50K+",
      time: "9 hours",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=103147&version=d4a1c8f2-a355-48f4-98ce-a912b5377939&quality=high&type=webp",
    },
    {
      id: 404997,
      rank: 3,
      title: "House Number 446",
      parts: 162,
      rating: 4.4,
      readers: "1L+",
      time: "4 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/404997/cover_image/404997.jpg?quality=high&type=webp",
    },
    {
      id: 83574,
      rank: 4,
      title: "Exploring Each Other",
      parts: 41,
      rating: 4.9,
      readers: "90K+",
      time: "8 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/83574/cover_image/83574.jpg?quality=high&type=webp",
    },
    {
      id: 724790,
      rank: 5,
      title: "Alpha Titan",
      parts: 166,
      rating: 4.5,
      readers: "52K+",
      time: "17 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/724790/cover_image/724790.jpg?quality=high&type=webp",
    },
    {
      id: 409043,
      rank: 6,
      title: "The CEO's Night Lover [Completed]",
      parts: 81,
      rating: 4.9,
      readers: "90K+",
      time: "7 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/409043/cover_image/409043.jpg?quality=high&type=webp",
    },
  ];

  const recentlyUpdatedSeries = [
    {
      id: 653650,
      title: "My Love is one in a million",
      parts: 152,
      rating: 4.9,
      readers: "36K+",
      time: "11 hours",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=653650&version=e7cbe550-fefc-4fe8-8636-6388612b6ec1&quality=high&type=webp",
    },
    {
      id: 584388,
      title: "Unwanted marriage",
      parts: 152,
      rating: 4.9,
      readers: "49K+",
      time: "11 hours",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=584388&version=b9b410a1-9deb-4da4-80f8-ce0f9b34b12d&quality=high&type=webp",
    },
    {
      id: 6755373534735459,
      title: "Feeling Your Warmth",
      parts: 85,
      rating: 4.9,
      readers: "16L+",
      time: "7 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi/cover?pratilipiId=6755373534735459&version=768b25f6-9108-42db-986f-a927aee5fa70&quality=high&type=webp",
    },
    {
      id: 756032,
      title: "Arrange Marriage",
      parts: 48,
      rating: 4.9,
      readers: "15K+",
      time: "4 hours",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=756032&version=0d650355-19fa-4ed9-bcea-5e3296102aef&quality=high&type=webp",
    },
    {
      id: 564538,
      title: "Dominated By My Stepbrother",
      parts: 98,
      rating: 4.9,
      readers: "7K+",
      time: "10 hours",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=564538&version=92b4fb47-1d5c-4d49-8687-f063151a1ab9&quality=high&type=webp",
    },
    {
      id: 6755373540234992,
      title: "In A Heartbeat...! - Intertwined Series - Book 5",
      parts: 49,
      rating: 5.0,
      readers: "2K+",
      time: "7 hours",
      image:
        "https://static-assets.pratilipi.com/pratilipi/cover?pratilipiId=6755373540234992&version=9c984c1c-26b0-4f3d-aadb-083e7d69d377&quality=high&type=webp",
    },
  ];

  const categories = [
    {
      title: "Romance Stories",
      image:
        "https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/category/romance",
    },
    {
      title: "Horror Stories",
      image:
        "https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/category/horror",
    },
    {
      title: "Children's Stories",
      image:
        "https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/category/children",
    },
    {
      title: "Comedy",
      image:
        "https://images.pexels.com/photos/9089229/pexels-photo-9089229.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/category/comedy",
    },
  ];

  const undiscoveredRomance = [
    {
      title: "His Last Wish",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/600144/cover_image/600144.jpg?quality=high&type=webp",
      rating: 4.5,
      parts: 43,
      time: "7 hours",
      readers: 460,
      path: "/story/his-last-wish",
    },
    {
      title: "Devil's Vow",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/608416/cover_image/608416.jpg?quality=high&type=webp",
      rating: 4.0,
      parts: 47,
      time: "4 hours",
      readers: "3K+",
      path: "/story/devils-vow",
    },
    {
      title: "THE ITALIAN BILLIONAIRE PREGNANT BRIDE",
      image:
        "https://static-assets.pratilipi.com/pratilipi/cover?pratilipiId=6755373533703255&version=31d86488-d880-49e5-a514-bcac57a42a33&quality=high&type=webp",
      rating: 4.7,
      parts: 35,
      time: "6 hours",
      readers: "7K+",
      path: "/story/italian-billionaire-pregnant-bride",
    },
    {
      title: "Toxic Marriage",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/599734/cover_image/599734.jpg?quality=high&type=webp",
      rating: 4.7,
      parts: 108,
      time: "12 hours",
      readers: "21K+",
      path: "/story/toxic-marriage",
    },
    {
      title: "My Bestfriend's Brother",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/600861/cover_image/600861.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 36,
      time: "7 hours",
      readers: "6K+",
      path: "/story/bestfriends-brother",
    },
    {
      title: "His Delicate Beauty",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/608840/cover_image/608840.jpg?quality=high&type=webp",
      rating: 4.7,
      parts: 72,
      time: "6 hours",
      readers: "3K+",
      path: "/story/delicate-beauty",
    },
  ];

  const romanceStories = [
    {
      title: "Imbibing Her Darkness",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/443677/cover_image/443677.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 70,
      time: "7 hours",
      readers: "89K+",
      path: "/story/imbibing-her-darkness",
    },
    {
      title: '𝐓𝐀𝐍𝐆𝐋𝐄𝐃 𝐇𝐄𝐀𝐑𝐓𝐒✓ {"{"} 𝐵𝑜𝑜𝑘 𝐼 — 𝐻𝑒𝑎𝑟𝑡 𝑠𝑒𝑟𝑖𝑒𝑠 {"} ',
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/273754/cover_image/273754.jpg?quality=high&type=webp",
      rating: 4.9,
      parts: 35,
      time: "6 hours",
      readers: "37K+",
      path: "/story/tangled-hearts",
    },
    {
      title: "Love after arrange marriage 😘",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=292092&version=a1e17279-e58e-4cbd-8148-058e61bf507e&quality=high&type=webp",
      rating: 4.9,
      parts: 18,
      time: "1 hour",
      readers: "15L+",
      path: "/story/love-after-arranged-marriage",
    },
    {
      title: "ഒരു💦ചാറ്റൽമഴപോൽ",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=537470&version=2740ea2c-5060-49bb-a6c5-3316e6aa7f00&quality=high&type=webp",
      rating: 4.9,
      parts: 56,
      time: "4 hours",
      readers: "4L+",
      path: "/story/chatl-mazhapol",
    },
    {
      title: "You Dazzle Me ✨",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/379142/cover_image/379142.jpg?quality=high&type=webp",
      rating: 4.7,
      parts: 62,
      time: "4 hours",
      readers: "1L+",
      path: "/story/you-dazzle-me",
    },
    {
      title: "(My psycho Mafia's Desire) Delightful❤️",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=471578&version=e394c6ca-7542-4330-861b-8f3526866a6c&quality=high&type=webp",
      rating: 4.9,
      parts: 45,
      time: "2 hours",
      readers: "54K+",
      path: "/story/psycho-mafias-desire",
    },
  ];

  const youthFictionStories = [
    {
      title: "💞💞 AN EROS SO BEAUTIFUL💞💞(AESB-PART 1) COMPLETED",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/175084/cover_image/175084.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 106,
      time: "12 hours",
      readers: "1L+",
      path: "/story/eros-so-beautiful",
    },
    {
      title: "The Heart that's Meant To Love You",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/372379/cover_image/372379.jpg?quality=high&type=webp",
      rating: 4.9,
      parts: 35,
      time: "3 hours",
      readers: "56K+",
      path: "/story/the-heart-meant-to-love-you",
    },
    {
      title: "The Heart that's Meant To Love You",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=96474&version=5c9b11a5-bd6e-49ad-9f2c-89fc6d1a9ce8&quality=high&type=webp",
      rating: 4.7,
      parts: 13,
      time: "3 hours",
      readers: "31K+",
      path: "/story/the-heart-meant-to-love-you-2",
    },
    {
      title: "A pleasurable meeting 😍🥰 (BDSM) only for 18+",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=542521&version=3acea061-ad17-4770-857e-e425312227ee&quality=high&type=webp",
      rating: 4.6,
      parts: 11,
      time: "2 Minutes",
      readers: "14K+",
      path: "/story/pleasurable-meeting-bdsm",
    },
    {
      title: "His Wicked Lies",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=506379&version=f89ec000-2a5c-4eaa-b493-117edccd1d47&quality=high&type=webp",
      rating: 4.8,
      parts: 44,
      time: "7 hours",
      readers: "46K+",
      path: "/story/his-wicked-lies",
    },
    {
      title: "HIS ANGEL | JJK",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=332416&version=b6d82baa-34be-4c84-b4c6-72e2e28f0dc0&quality=high&type=webp",
      rating: 4.8,
      parts: 48,
      time: "4 hours",
      readers: "21K+",
      path: "/story/his-angel-jjk",
    },
  ];

  const suspenseStories = [
    {
      title: "Tales of the heart ❤️",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/351998/cover_image/351998.jpg?quality=high&type=webp",
      rating: 4.5,
      parts: 44,
      time: "3 hours",
      readers: "53K+",
      path: "/story/tales-of-the-heart",
    },
    {
      title: '"INDIAN BRIDE OF ARDEN"❤️',
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=365434&version=9cee3e73-22a8-4ced-a431-b356fd400f3b&quality=high&type=webp",
      rating: 4.8,
      parts: 36,
      time: "2 hours",
      readers: "57K+",
      path: "/story/indian-bride-of-arden",
    },
    {
      title: "فیری ٹیل سیزن ٹو (The beast: has returned)",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=600847&version=81f7a358-f3f0-4ce5-a14f-b59fe56fc01e&quality=high&type=webp",
      rating: 4.9,
      parts: 65,
      time: "23 hours",
      readers: "28+",
      path: "/story/fairy-tail-season-2",
    },
    {
      title: "DO I LOVE MY VILLAIN? ❤",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=192630&version=a1b7ef7d-e181-4cf3-a32d-a895b5b51cc1&quality=high&type=webp",
      rating: 4.7,
      parts: 28,
      time: "2 hours",
      readers: "55K+",
      path: "/story/do-i-love-my-villain",
    },
    {
      title: "𝐌𝐚𝐟𝐢𝐚 𝐊𝐢𝐧𝐠 !",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=368848&version=e4dc62ce-d94e-4d4c-904d-7af91bf49b2d&quality=high&type=webp",
      rating: 4.8,
      parts: 22,
      time: "2 hours",
      readers: "10K+",
      path: "/story/mafia-king",
    },
    {
      title: "Haunted Mansion",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=527737&version=18ace9fe-d6c3-4980-b5fd-ac151a01a8ad&quality=high&type=webp",
      rating: 4.5,
      parts: 15,
      time: "1 hour",
      readers: "5K+",
      path: "/story/haunted-mansion",
    },
  ];

  const mostLovedStories = [
    {
      title: "AN ONLINE AND OFFLINE STORY: A ROMANTIC EROTICA",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=495226&version=70af41b5-b490-458b-a729-5c91345bda37&quality=high&type=webp",
      rating: 4.5,
      parts: 12,
      time: "18 hours",
      readers: "54K+",
      path: "/story/online-offline-romantic-erotica",
    },
    {
      title:
        'The "K" Sisters - Nainital Saga- The Black Eclipse. (শুধুমাত্র প্রাপ্তবয়স্ক এবং প্রাপ্তমনস্কদের জন্য) 🔞+',
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/490028/cover_image/490028.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 43,
      time: "20 hours",
      readers: "26K+",
      path: "/story/k-sisters-nainital-saga",
    },
    {
      title: "Ishq after marriage",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=491074&version=e49e93ed-22c4-4aee-ab9d-77150d1a4b67&quality=high&type=webp",
      rating: 4.7,
      parts: 52,
      time: "6 hours",
      readers: "63K+",
      path: "/story/ishq-after-marriage",
    },
    {
      title: "𝐋𝐎𝐕𝐄𝐒𝐓𝐑𝐔𝐂𝐊 | ✓",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/190768/cover_image/190768.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 58,
      time: "7 hours",
      readers: "74K+",
      path: "/story/lovestruck",
    },
    {
      title: "Billionaire's Secret Marriage",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/441010/cover_image/441010.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 72,
      time: "4 hours",
      readers: "3L+",
      path: "/story/billionaires-secret-marriage",
    },
    {
      title: "LᎧᏤᏋ ᏊITH MR. ᏰᎧRᏁFIRᏋ ✔✔",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/274393/cover_image/274393.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 34,
      time: "2 hours",
      readers: "34K+",
      path: "/story/love-with-mr-burnfire",
    },
  ];

  const dramaStories = [
    {
      title: "Accidental Marriage",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=477606&version=d9e294d1-c80a-48a6-88eb-85ae1a49bbd2&quality=high&type=webp",
      rating: 4.8,
      parts: 105,
      time: "12 hours",
      readers: "35K+",
      path: "/story/accidental-marriage",
    },
    {
      title: "Different_Love_👩‍❤️‍👨",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=442469&version=e18e5560-1e43-4277-8a11-05e297e66443&quality=high&type=webp",
      rating: 4.7,
      parts: 11,
      time: "44 hours",
      readers: "4K+",
      path: "/story/different-love",
    },
    {
      title: "My Innocent Girl",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/369320/cover_image/369320.jpg?quality=high&type=webp",
      rating: 4.7,
      parts: 29,
      time: "5 hours",
      readers: "52K+",
      path: "/story/my-innocent-girl",
    },
    {
      title: "An Imperfect love",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/305827/cover_image/305827.jpg?quality=high&type=webp",
      rating: 4.9,
      parts: 61,
      time: "4 hours",
      readers: "1L+",
      path: "/story/imperfect-love",
    },
    {
      title: "Billionaire's Secret Marriage",
      image:
        "https://static-assets.pratilipi.com/pratilipi_premium/data/441010/cover_image/441010.jpg?quality=high&type=webp",
      rating: 4.8,
      parts: 72,
      time: "4 hours",
      readers: "3L+",
      path: "/story/billionaires-secret-marriage",
    },
    {
      title: "IS IT YOU??? |COMPLETED|",
      image:
        "https://static-assets.pratilipi.com/series/cover?seriesId=136377&version=6185d8b0-c5c5-46d7-a9ff-83992eedfa0c&quality=high&type=webp",
      rating: 4.7,
      parts: 30,
      time: "3 hours",
      readers: "90K+",
      path: "/story/is-it-you-completed",
    },
  ];

  const categoriesw = [
    "Romance Stories",
    "Short Stories",
    "Science Fiction",
    "Action and Adventure",
    "Thriller Stories",
    "Fantasy And Supernatural",
    "Horror Stories",
    "Classics",
    "Fresh Voices",
    "Classic Love Stories",
    "All Time Favourites",
    "Travel",
    "Poems",
    "Children",
    "Medical",
    "Biography",
  ];

  const categoriesr = [
    {
      title: "Popular Languages",
      items: [
        "Hindi",
        "Marathi",
        "Bengali",
        "Malayalam",
        "Kannada",
        "Telugu",
        "Tamil",
      ],
    },
    {
      title: "Top Genre",
      items: ["Romance", "Young Adult", "Suspense", "Drama", "Top Content"],
    },
    {
      title: "Also Read",
      items: ["Most Read", "William Shakespeare", "Arthur Conan Doyle"],
    },
  ];

  return (
    <>
      {/* section 2 */}
      <section>
        <div className="section2">
          <div className="left">
            <h1>Best platform for online book reading</h1>
            <h3>Rebecca Collins</h3>
            <p>
              <b>
                Rebecca Collins is a short story author, novelist, and
                award-winning poet.
              </b>{" "}
              <br />
              She has work appearing or forthcoming in over a dozen venues,
              including Buzzy Mag, The Spirit of Poe, and the British Fantasy
              Society journal Dark Horizons. Rebecca is also CEO of a company,
              specializing in custom book publishing and social media marketing
              services, and has created a community for authors to learn and
              connect.
            </p>
            {/* Assuming you want to add a link to an Author Profile or something similar */}
            <Link to="/rebecca-collins">Learn more about Rebecca Collins</Link>
          </div>
          <div className="right">
            <img
              src="http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/book2.png"
              alt="Rebecca Collins Book"
            />
          </div>
        </div>
      </section>
      {/* section3 */}
      <section>
        <div className="section3">
          <Link to="/">
            <div className="trending">
              <h1>Top Trending Stories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {stories.map((story) => (
              <div key={story.id} className="poster">
                <Link to={`/`}>
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h1>#{story.rank}</h1>
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Top Recently Updated Series</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {recentlyUpdatedSeries.map((series) => (
              <div key={series.id} className="poster">
                <Link to={`/`}>
                  <img src={series.image} alt={series.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {series.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {series.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {series.title}
                    </h5>
                    <em>{series.time}</em>
                    <h6>{series.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section>
        <div className="section5">
          <Link to="/">
            <div className="trending">
              <h1>Explore Categories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {categories.map((category, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={category.image} alt={category.title} />
                  <div className="content">
                    <p>{category.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu copy 
  undiscovered romance */}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Undiscovered Romance</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {undiscoveredRomance.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu copy 
  Romance Stories*/}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Romance Stories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {romanceStories.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu copy 
  Youth Fiction Stories*/}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Youth Fiction Stories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {youthFictionStories.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu copy 
  Suspense Stories*/}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Suspense Stories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {suspenseStories.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu copy Most 
  Loved Stories*/}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Most Loved Stories</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {mostLovedStories.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 4 nu 
  copy Drama*/}
      <section>
        <div className="section4">
          <Link to="/">
            <div className="trending">
              <h1>Drama</h1>
              <h2>&gt;</h2>
            </div>
          </Link>
          <div className="story1">
            {dramaStories.map((story, index) => (
              <div key={index} className="poster">
                <Link to="/">
                  <img src={story.image} alt={story.title} />
                  <div className="content">
                    <div className="flex">
                      <h2>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#ffffff", fontSize: 14 }}
                        />
                        {story.rating}
                      </h2>
                    </div>
                    <p>
                      <i className="fa-regular fa-file-lines" />
                      <em style={{ fontStyle: "normal" }}>
                        {" "}
                        {story.parts} parts
                      </em>
                    </p>
                  </div>
                  <div className="text">
                    <h5 className="text-truncate" style={{ maxWidth: 150 }}>
                      {story.title}
                    </h5>
                    <em>{story.time}</em>
                    <h6>{story.readers} Total Readers</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section 6 */}
      {/* stories */}
      <section>
        <div className="section6">
          {categoriesw.map((category, index) => (
            <button key={index}>
              <Link to={`/`}>{category}</Link>
            </button>
          ))}
        </div>
      </section>
      {/* section 8 */}
      {/* popular Lnaguages */}
      <section>
        <div className="section8">
          {categoriesr.map((category, index) => (
            <div key={index} className="grid1">
              <div className="grid">
                <div className="left">
                  <h5 className="h5">{category.title}</h5>
                </div>
              </div>
              <ul className={`home${index + 1}`}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* footer */}
      <footer>
        <div className="footer1">
          <div className="grid">
            <div className="before">
              <h1>Mobile App</h1>
            </div>
            <div className="content">
              <Link to="https://play.google.com/store/games?hl=en&pli=1">
                <img
                  src="https://mark8-static.pratilipi.com/seo-suite/img/google-play-badge.546770f.png"
                  alt=""
                />
              </Link>
              <br />
              <Link to="https://www.apple.com/in/app-store/">
                <img
                  src="https://mark8-static.pratilipi.com/seo-suite/img/app-store-badge.5e95663.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="grid">
            <div className="before">
              <h1>Help centre</h1>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to="/write">
                    <i className="fa-solid fa-pencil" />
                    Writing
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-solid fa-book-open" />
                    Reading
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-regular fa-copyright" />
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-regular fa-circle-question" />
                    General
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid">
            <div className="before">
              <h1>Contact Us</h1>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-solid fa-envelope" />
                    miralimoradiya@gmail.com
                  </Link>
                </li>
              </ul>
              <p>
                <i className="fa-solid fa-address-card" /> 407, Dhara Arcade,
                Mahadev Chowk, opposite Swaminarayan temple, Maruti Nandan
                Society, <br />
                Mota Varachha, Surat, <br /> Gujarat 394101
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="before">
              <h1>Follow us on Social Media</h1>
            </div>
            <div className="content">
              <div className="mira">
                <div className="back">
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </div>
                <div className="back">
                  <Link to="/">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </div>
                <div className="back">
                  <Link to="/">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </div>
                <div className="back">
                  <Link to="/">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

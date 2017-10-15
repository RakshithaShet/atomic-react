const profile = {
  id: 'saman',
  name: 'Saman',
  location: "Sydney, Australia",
  connection: 500,
  summary: "I have worked in the recruitment industry for 10 years, ultimately gaining experience in B2B sales, talent marketing, human resources practices, sourcing and recruiting at a variety of levels. As a recruiter, I take pride in ensuring that placements are a strong match for all parties - I'm interested in finding people careers rather than simply jobs.",
  email: 'samanshafigh@gmail.com',
  friends: [
    {id: 'sina', name: 'Sina', email: 'sina@gmail.com', img: 'static/profile/profile-smal_40.gif'},
    {id: 'omar', name: 'Omar', email: 'omar@gmail.com', img: 'static/profile/profile-smal_31.gif'},
    {id: 'verica', name: 'Verica', email: 'verica@gmail.com', img: 'static/profile/profile-smal_47.gif'},
    {id: 'dave', name: 'Dave', email: 'dave@gmail.com', img: 'static/profile/profile-smal_39.gif'},
    {id: 'shayan', name: 'Shayan', email: 'shayan@gmail.com', img: 'static/profile/profile-smal_03.gif'},
    {id: 'faraz', name: 'Faraz', email: 'faraz@gmail.com', img: 'static/profile/profile-smal_37.gif'},
    {id: 'ronak', name: 'Ronak', email: 'ronak@gmail.com', img: 'static/profile/profile-smal_32.gif'},
    {id: 'chao', name: 'Chao', email: 'chao@gmail.com', img: 'static/profile/profile-smal_11.gif'},
    {id: 'asha', name: 'Asha', email: 'chao@gmail.com', img: 'static/profile/profile-smal_09.gif'},
  ],
  educations: [
    {id: 1, title: "Doctor of Philosophy (PhD), Computer Science and Engineering", organization: "UNSW Australia"},
    {id: 2, title: "Bachelor's Degree, Computer Software Engineering", organization: "Charles Sturt University"},
  ],
  experience: [
    {
      id: 1,
      title: 'Recruiter',
      summary: "Aramco Services Company (ASC) is the U.S.-based subsidiary of Saudi Aramco, the state-owned oil company of the Kingdom of Saudi Arabia and a fully integrated, global petroleum and chemicals enterprise. ASC’s geographical area of responsibility extends throughout North America, with operations in the U.S. and Canada, and selected activities in South America.",
      date: "Jan 2014 - Present"
    },
    {
      id: 2,
      title: 'Recruiter - Engineering/IT',
      summary: "The Daniel Group provides a complete suite of services including executive search, contract, contract-to-hire and direct hire staffing as well as payrolling and partnering. We apply superior expertise and service to staffing needs of any duration at all organizational levels.",
      date: "May 2012 - Dec 2013"
    },
    {
      id: 3,
      title: 'Corporate Recruiter',
      summary: "Recruiting and screening candidates for internal employment with CORESTAFF Services Financial, legal, human capital, industrial and management level openings.",
      date: "May 2011 - May 2012"
    },
  ],
  recommendations: [
    {
      id: 1,
      user: {id: 'verica', name: 'Verica', email: 'verica@gmail.com'},
      summary: "Rachel was an exceptional and vital member of our team at CORESTAFF. She is highly skilled at working with mid to senior level management and has a talent for finding qualified candidates to fill any role. I really enjoyed working with Rachel and admire her for her dedication and adaptability."
    },
    {
      id: 2,
      user: {id: 'asha', name: 'Asha', email: 'chao@gmail.com'},
      summary: "Rachel – Thank you so much for your kind sentiments! I have always thought of you with very high regard! It was such a pleasure to have had the opportunity to watch you grow into the lovely professional woman you have grown into so well! I wish you the best of luck in your new endeavor! Jeanne."
    },
    {
      id: 3,
      user: {id: 'chao', name: 'Chao', email: 'verica@gmail.com'},
      summary: "Rachel was an exceptional and vital member of our team at CORESTAFF. She is highly skilled at working with mid to senior level management and has a talent for finding qualified candidates to fill any role. I really enjoyed working with Rachel and admire her for her dedication and adaptability."
    },
    {
      id: 4,
      user: {id: 'ronak', name: 'Ronak', email: 'ronak@gmail.com'},
      summary: "Rachel was an exceptional and vital member of our team at CORESTAFF. She is highly skilled at working with mid to senior level management and has a talent for finding qualified candidates to fill any role. I really enjoyed working with Rachel and admire her for her dedication and adaptability."
    },
  ]
};

export default profile;
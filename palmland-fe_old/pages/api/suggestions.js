const suggestions = [
    'Apple',
    "Appy",
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon'
  ];


  export default function handler(req, res) {
    const { query } = req.query;
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
  
    res.status(200).json(filteredSuggestions);
  }
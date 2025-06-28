import { useState, useEffect } from 'react';

const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('/api/menus');
      if (!response.ok) throw new Error('Failed to fetch menu items');
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const response = await fetch(`/api/menus?search=${query}`);
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return {
    menuItems,
    searchQuery,
    selectedCategory,
    filteredItems,
    handleSearch,
    handleCategoryChange,
    loading,
    error
  };
};

export default useMenu;

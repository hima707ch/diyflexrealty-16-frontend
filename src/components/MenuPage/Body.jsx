import React from 'react';
import MenuList from './MenuList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import useMenu from './useMenu';
import images from '../assets/images';

const Body = () => {
  const { 
    menuItems,
    searchQuery,
    selectedCategory,
    filteredItems,
    handleSearch,
    handleCategoryChange,
    loading,
    error
  } = useMenu();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      <div id="Body_5" className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar id="Body_6" onSearch={handleSearch} searchQuery={searchQuery} />
        <CategoryFilter
          id="Body_7"
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <MenuList id="Body_8" items={filteredItems} />
    </div>
  );
};

export default Body;

/**
 * Trie (Prefix Tree) data structure for fast autocomplete search
 * Optimized for O(1) average lookup time for prefixes
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.data = null; // Store page data (title, path, etc.)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Insert a word into the trie
   * @param {string} word - The word to insert
   * @param {object} data - Associated data (path, title, etc.)
   */
  insert(word, data = null) {
    let node = this.root;
    const lowerWord = word.toLowerCase();

    for (let char of lowerWord) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEnd = true;
    node.data = data || { title: word, path: `/${word.toLowerCase().replace(/\s+/g, '-')}` };
  }

  /**
   * Search for all words with the given prefix
   * @param {string} prefix - The prefix to search for
   * @param {number} maxResults - Maximum number of results to return
   * @returns {Array} Array of matching words with their data
   */
  search(prefix, maxResults = 10) {
    if (!prefix) return [];

    let node = this.root;
    const lowerPrefix = prefix.toLowerCase();

    // Traverse to the prefix node
    for (let char of lowerPrefix) {
      if (!node.children[char]) {
        return []; // No matches
      }
      node = node.children[char];
    }

    // Collect all words from this node
    const results = [];
    this._collectAllWords(node, lowerPrefix, results, maxResults);
    
    return results;
  }

  /**
   * Recursively collect all words from a node
   * @private
   */
  _collectAllWords(node, prefix, results, maxResults) {
    if (results.length >= maxResults) return;

    if (node.isEnd && node.data) {
      results.push({
        title: node.data.title,
        path: node.data.path,
        matchedPrefix: prefix
      });
    }

    // Traverse all children
    for (let char in node.children) {
      this._collectAllWords(
        node.children[char],
        prefix + char,
        results,
        maxResults
      );
    }
  }

  /**
   * Check if a word exists in the trie
   * @param {string} word - The word to check
   * @returns {boolean}
   */
  contains(word) {
    let node = this.root;
    const lowerWord = word.toLowerCase();

    for (let char of lowerWord) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEnd;
  }
}

export default Trie;


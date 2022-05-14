/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	return 'http://tinyurl.com/' + btoa(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return atob(shortUrl.slice(19, shortUrl.length));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end


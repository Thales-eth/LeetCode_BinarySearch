// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// https://leetcode.com/problems/binary-search/

function search(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) return mid

        else if (nums[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// https://leetcode.com/problems/search-a-2d-matrix/

const searchMatrix = (matrix, target) => {
    let left = 0
    let m = matrix[0].length // 2
    let n = matrix.length // 1
    let right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        const row = Math.floor(mid / m)
        const col = Math.floor(mid % m)
        const number = matrix[row][col]
        if (number === target) return true
        else if (number > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }

    return false
}

// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [4,5,2,1], queries = [3,10,21]
// Output: [2,3,4]
// Explanation: We answer the queries as follows:
// - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
// - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
// - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

// https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

const answerQueries = (nums, queries) => {
    nums.sort((a, b) => a - b)
    const prefix = [nums[0]]
    const ans = []

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix.at(-1))
    }

    for (query of queries) {
        let canPush = true
        let left = 0
        let right = prefix.length - 1
        while (left <= right) {
            const mid = Math.floor((right + left) / 2)
            if (prefix[mid] === query) {
                canPush = false
                ans.push(mid + 1)
                break
            }
            else if (prefix[mid] > query) right = mid - 1
            else {
                left = mid + 1
            }
        }
        if (canPush) ans.push(left)
    }
    return ans
}



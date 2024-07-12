/** Sort array of strings in-place, case-insensitively. Returns array. */

/**
 * ["apple", "Orange", "banana", "Blueberry"]
 * use the sort function
 * pass in a callback with 2 arguments
 * compare both by replacing the default logic
 *
 * + => greater, first goes to the right of second
 * - => smaller, first goes to the left of second
 * 0 => no change
 */

function caseInsensitiveSort(arr: string[]): string[] {

  const sortedArr = arr.sort((a,b)=>{
    a = a.toLowerCase()
    b = b.toLowerCase()

    if (a > b) return 1;
    if (a < b) return -1
    return 0

  })

  return sortedArr;
}

export { caseInsensitiveSort };
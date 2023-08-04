type IComment = {
   commentId: number;
   commentContent: string;
   replies ? : IComment[];
}
const comments: IComment[] = [{
      commentId: 1,
      commentContent: 'Hai',
      replies: [{
            commentId: 11,
            commentContent: 'Hai juga',
            replies: [{
                  commentId: 111,
                  commentContent: 'Haai juga hai jugaa'
               },
               {
                  commentId: 112,
                  commentContent: 'Haai juga hai jugaa'
               }
            ]
         },
         {
            commentId: 12,
            commentContent: 'Hai juga',
            replies: [{
               commentId: 121,
               commentContent: 'Haai juga hai jugaa'
            }]
         }
      ]
   },
   {
      commentId: 2,
      commentContent: 'Halooo'
   }
]


function count(comments: IComment[]): number 
{
   let result: number = +comments.length

   comments.forEach(el => {

      if(el.replies)
      {
         result += el.replies.length

         el.replies.forEach(el2 => {

            if(el2.replies)
            {

               result += el2.replies.length
            }
         });
      }
   })

   return result
}

/**
 * 
 * ===================== SOAL ====================
 * Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
   balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.
 */

console.log(`Berdasarkan data di atas, total komentar adalah 7 komentar`);
type IFruit = {
   fruitId: number,
   fruitName: string,
   fruitType: 'IMPORT' | 'LOCAL',
   stock: number
}
const fruits: IFruit[] = [{
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
   },
   {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
   },
   {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
   },
   {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
   },
   {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
   },
   {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
   },
   {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
   }
]


// 1. Buah apa saja yang dimiliki Andi? (fruitName)
// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?
// 3. Berapa total stock buah yang ada di masing-masing wadah?
// 4. Apakah ada komentar terkait kasus di atas?

//___________________ JAWABAN ______________________

// code nomer 1 <============================================

function answer1(array: IFruit[]): string{

   let fruits: string[] = []

   array.forEach((el) => {
      fruits.includes(el.fruitName.toLowerCase()) ? null : fruits.push(el.fruitName.toLowerCase())
   });

   return `Ada ${fruits.join(',')}`;
}

const temp = fruits;

console.log('====================================');
console.log('Jawaban no 1');
console.log(answer1(temp));
console.log('====================================');
// 1. Ada apel,kurma,manggis,jeruk bali,salak



// code nomer 2 & 3<============================================

type IResult = {
   jenis: string;
   buah: string[];
   jumlah: number
}

function data(array: IFruit[]): IResult[]
{


   let result: IResult[] = [];


   array.forEach(el => {
      
      let obj: IResult = {
         jenis: el.fruitType,
         buah: [el.fruitName.toLowerCase()],
         jumlah: el.stock,
      }
      if(result.length <= 0)
      {

         result.push(obj)
      } else {
         
         let check: boolean = false;
         let idx: number = 0;

         result.forEach((element, index) => {
            if(el.fruitType.toLowerCase() === element.jenis.toLowerCase())
            {
               check = true
               idx = index
               return
            }
         });

         
         if(check){
            
            let check2 = result[idx].buah.includes(el.fruitName.toLowerCase()) 
            
            check2? null : result[idx].buah.push(el.fruitName.toLowerCase())

            result[idx].jumlah += el.stock

         } else {

            result.push(obj)
         }
      }

   });
   
   return result
}

let objArray: IResult[] = data(temp)

function answer2(objArray: IResult[]): string 
{

   const importFruits: string[] = [];
   const localFruits: string[] = [];

   objArray.forEach(({ jenis, buah }) => {

      if (jenis.toUpperCase() === 'IMPORT') {

         importFruits.push(...buah);
      } else if (jenis.toUpperCase() === 'LOCAL') {

         localFruits.push(...buah);
      }
   });

  const formattedImportFruits = `IMPORT: ${importFruits.join(', ')}`;
  const formattedLocalFruits = `LOCAL: ${localFruits.reverse().join(', ')}`;

  return `Jawaban no 2 \n Ada ${objArray.length} wadah \n ${formattedLocalFruits}\n ${formattedImportFruits}`;
}

function answer3(objArray: IResult[]): string 
{
   let importTotal: number = 0;
   let localTotal: number = 0;

   objArray.forEach(({jenis, jumlah}) => {

      if (jenis.toUpperCase() === 'IMPORT') {

         importTotal = jumlah;
      } else if (jenis.toUpperCase() === 'LOCAL') {

         localTotal = jumlah;
      }
   })

   const formattedImportFruits = `IMPORT: ${importTotal}`;
  const formattedLocalFruits = `LOCAL: ${localTotal}`;
   return `Jawaban no 3 \n Ada ${objArray.length} wadah \n ${formattedImportFruits}\n ${formattedLocalFruits}`;
}

console.log('====================================');
console.log(answer2(objArray));
console.log('====================================');
/** 2. 
   Ada 2 wadah 
   LOCAL: salak, jeruk bali, manggis
   INPORT: apel, kurma
*/ 

console.log('====================================');
console.log(answer3(objArray));
console.log('====================================');

/**
 *Ada 2 wadah
   IMPORT: 100
   LOCAL: 260
 */

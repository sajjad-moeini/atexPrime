

export const featuresCreator =(text:string)=>{
   let fullSpace = text.replace(/\s+/g, '');
   let splitedAll = fullSpace.split("%")
   const allFeachers = splitedAll.map((item, index) => {
      const properties = item.split(":")
      if (index == 0) return null
      else return { title: properties[0], value: properties[1] }
   })
   const feachers = allFeachers.filter(item => item !== null)
  return feachers
}
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

export function export_txt_to_zip(header, jsonData, txtName, zipName) {
  const zip = new JSZip()

  const data = jsonData

  let txtData = `${header}\r\n`

  data.forEach((row) => {
    let tempStr = ''
    tempStr = row.toString()

    txtData += `${tempStr}\r\n`
  })
  zip.file(`${txtName}.txt`, txtData)
  zip
    .generateAsync({
      type: 'blob',
    })
    .then(
      (blob) => {
        saveAs(blob, `${zipName}.zip`)
      },
      (err) => {
        alert('导出失败')
      }
    )
}

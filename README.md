# Test

### Problem
```
ให้สร้าง Project Angular เพื่อออกแบบ form 1 form  โดยให้ render หน้าฟอร์มตาม Schema ของ Json ด้านล่าง โดยสร้างเป็น control 2 ชุดที่เหมือนกัน ชุดแรกสำหรับ input และชุดที่2 ข้อมูลจะเปลี่ยนตามชุดแรกแบบทันทีที่มีการแก้ไขข้อมูลชุดที่1 (หากมี tools ที่ต้องการใช้ download ได้เลย)
อธิบายเพิ่มเติม : ให้นำ Jsonเป็น Inputในการนำไป rendor หน้าจอ โดยเมื่อต้องการเปลี่ยนแปลง form สามารถมาแก้ที่ Json ได้ เช่น เพิ่ม textbox เข้าไปอีก 1 อัน จะต้องสามารถเพิ่มได้ผ่าน Json
Json Data :
{
	“form”: [
	    {
              “id”: “name”
              “value”: “”,
              “type”: “text”
	    },
	    {
              “id”: “email”
              “value”: “”,
              “type”: “text”
	    },
	    {
              “id”: “gender”,
              “value”: “male”,
              “type”: “radio”
	    }
	]
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

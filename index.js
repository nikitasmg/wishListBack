const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000 || process.env.PORT

const presents = [
    {
        id: 1,
        name: 'Набор чашек для чая',
        description: 'Главное, чтоб двойное стекло. Желательно набор из 4-6 штук. По виду можно как на примере.',
        url: 'https://www.ozon.ru/product/nabor-chaynyy-kofeynaya-para-greenbrown-aromatnyy-chay-prozrachnoe-steklo-250-ml-na-2-pers-815569388/?asb=t%252FXYssOmqX4ok5dyhZRAFTpE%252BnZVnEc57UHlQU%252BmTnrgGoMYRMFRKjdlvXSrNlpm&asb2=q64L1GdKL44_dEZBQHq6vALlKO0j_XSLm3BW9bQQ6S6A9LDf2qJdxfYFnX-OZrX0vhN-7V6Hxax14jMML3m80nhC0HqLPYSnfhEdDrfGANpeui6pYEaCjAE3nBCqRmvP116iphrG-pFcPQr3zyIkVqmIf3tdsZXhMgBn5gmuyzYLMOOIRx5EShz72BmAMeK-&avtc=1&avte=2&avts=1672691054&keywords=чашки+для+чая&sh=LC_P8SNDkQ',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-x/c1000/6496148505.jpg',
        isReserved: false,
    },
    {
        id: 2,
        name: 'Паровая швабра',
        description: 'Можно самую простую. Можно kitfort. Желательно чтоб были доп насадки',
        url: 'https://www.ozon.ru/product/parovaya-shvabra-kitfort-kt-1004-4-fioletovyy-282740224/?asb=hi%252FSX0eLm%252BBo6gNo7pbsxR3GzFgyGOUNRFSpYRg4ScU%253D&asb2=FxvsepVi4ZPcuXJFZojNT51mvX_SVxEJ18Iu-P6rx7MGtTO-J8aEQ9kONh2dQRAz&avtc=1&avte=4&avts=1672691215&keywords=паровая+швабра&sh=LC_P8d3CyA',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-n/c1000/6331866995.jpg',
        isReserved: false,
    },
    {
        id: 3,
        name: 'Точильные камни для ножей',
        description: 'Думаю будет достаточно 1000/6000',
        url: 'https://www.ozon.ru/product/tochilka-dlya-nozha-vodnye-tochilnye-kamni-brusok-dlya-zatochki-nozhey-571049486/?advert=-QraQqMFK9_U6-GW6osTWsHfLIFN5IrTkox2aA3GAhJiuKJPJ5e-DfcLnDfz9wimLIwUelXNxuwVpg-A3_PbDDaK-VoDKazgdnEVFDXxzW3O8tQ16I7zbRG4eCFiSz1998u57PsaGSr6trM033Faic_9B89YlcEq9OK46OeruBqNdKIuYlumKXnSxx_wVdbOfGgDnUENYmUAMKwZySh6Sz7SQWfs0K6ipZd6G3gykHBIqGTDLwuSXlKmt5MGfZw6xediZ2S-nIJJiNSYpDU1NkhGRy38xmrXjMYw3gQ-VbzhUUT1uhKAufUXvNQFdOhcoNfMH-YSxbhxOCJaWRnfJNAYk6GFaNmUn7-4jxosdHnV7HrxwQo1xQV6K82IV_tMe_2Xgo4Cj5imO8IwCabEJuG0KiL1FK3k3Ro2gzHF2ZlHsM70GHNIDwSdBcmfhoZiFMp0im5VLRtvl-zB1xcVfA6CwR-ZDEfrI3CGZBFjRIvekfJ2aenNK3yJZrWrwYLGQXMG4VI4cxfw1vicKufZp8pXDUXdqtr9DZuNgOKKYFuqLCHn3tZqzNr4GniRjPaopMaV1xfVvLUsZRB7nO0D7jrEJhMH0_tijaf_bRrOiZwfbI4VlI-KISm6hCVWT0BHa6StS3ac-2U68pXcbHLFdIMjoryjLLyLDA8-uE1S19vIzNxsXIBARcbCQionn2Ld7JwKr6kvjAK_vUH1VCCo2-u_6fJVhU0ltUke4yzaPilgL6bP15tftpqqyHALr59bc-TK70k2Nc-prPBoKksVbA&avtc=1&avte=4&avts=1672691273&keywords=точильный+камень+для+ножей&sh=LC_P8Tzdgg',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-5/c1000/6365092817.jpg',
        isReserved: false,
    },
    {
        id: 4,
        name: 'Нож или набор',
        description: 'Было бы круто если samura. Если че возьму денег откупиться ))',
        url: '',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-3/c1000/6306418755.jpg',
        isReserved: false,
    },
    {
        id: 5,
        name: 'Чай или набор',
        description: 'Можно разный. Все китайское (тигуанинь, габба, пуэр и тд). Расположил по важности))',
        url: '',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-u/c1000/6065886654.jpg',
        isReserved: false,
    },
    {
        id: 6,
        name: 'Мышка',
        description: 'Что-то более игровой формы. Важно чтоб подключалась к mac. Можно проводную, можно безпроводную (Но только c usb type-c плиз). И не плоскую))',
        url: '',
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-7/c1000/6088766143.jpg',
        isReserved: false,
    }
]

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json

app.post('/presents', (req, res) => {
    const present = req.body
    if (!present.name) {
        res.status(400).json({message: 'Name is not defined'})
        return
    }
    if (!present.description) {
        present.description = ''
    }
    if (!present.url) {
        present.url = ''
    }
    present.id = Date.now()
    present.isReserved = false
    presents.push(present)
    res.json(req.body)
})

app.get('/presents', (req, res) => {
    res.json(presents)
})

app.put('/presents', (req, res) => {
    const {id} = req.body
    const {isReserved} = req.body
    if (!id) {
        res.status(400).json({message: 'ID id not defined'})
        return
    }
    if (typeof id !== 'number') {
        res.status(400).json({message: 'ID must be an integer'})
        return
    }
    const target = presents.find(el => el.id === id)
    if (!target) {
        res.status(400).json({message: `Present with id - ${id} was not found`})
        return
    }
    target.isReserved = isReserved
    res.json(target)
})


app.listen(port, () => {
    console.log(`servers started on port ${port}`)
})

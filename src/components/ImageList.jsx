import { ImageList, ImageListItem } from "@mui/material";

export default function CustomImageList() {
    return (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const itemData = [
    {
      img: 'https://sun9-64.userapi.com/impg/YHepv0aU_bJ-SIdpvrOxB7lQHFVsnMhfPH34ow/UAPOK_DguAk.jpg?size=1440x2160&quality=95&sign=be29e1e1c70127aa9162531b3a448311&type=album',
      title: '1',
    },
    {
      img: 'https://sun9-71.userapi.com/impg/Zh4GV9aEAyscMkz0J4yLGuTpobFnv64bKnhhQg/PrAhC0Dye28.jpg?size=2560x1707&quality=95&sign=7c1fba7f822dc221b33aff336d7bedf1&type=album',
      title: '2',
    },
    {
      img: 'https://sun9-58.userapi.com/impg/YcUXad9JpPjQFbu5BGpgDCZfmzIRBsg7WIERyQ/DgqQIpaxAaY.jpg?size=1440x2160&quality=95&sign=998344f54a28db6dac6bf27af31c82ee&type=album',
      title: '3',
    },
    {
      img: 'https://sun9-41.userapi.com/impg/S8_xMudcOCM65-GDRp_AUa2yfqgM3cSl733E3Q/XvsFMUudeHA.jpg?size=2560x1707&quality=95&sign=1d3d22e543e1fbc0ee6f096b88fcd8a6&type=album',
      title: '4',
    },
    {
      img: 'https://sun9-68.userapi.com/impg/Vyo36OTO4aYIZAS0dEoAh2v3WevLTf82ree5oA/oeGpZOVdAPs.jpg?size=1440x2160&quality=95&sign=039f240d76ed01dfda46e24c13fe8037&type=album',
      title: '5',
    },
    {
      img: 'https://sun9-49.userapi.com/impg/HAOm8LSkOb77Os8Gt2dNdXQRV0Eddz6pYO93og/ozvM7-Z3Sgg.jpg?size=1440x2160&quality=95&sign=cfb76caf882386e3e52547cf9aa9a8cd&type=album',
      title: '6',
    },
    {
      img: 'https://sun9-63.userapi.com/impg/lxJEPXZBII-tt112kouO8cGZaKuC1rJ8wDQcgg/O8VgU12I978.jpg?size=1439x2160&quality=95&sign=7c660888d7cc2d5b2b162bebf47f96c4&type=album',
      title: '7',
    },
    {
      img: 'https://sun9-78.userapi.com/impg/0kmTRyZ2Kz5ge2hHuEtcXUAiZJ-UbaXvkLlhJA/N--3ID37v4Q.jpg?size=1439x2160&quality=95&sign=db9bf495e6a7be76efe8192e9315622d&type=album',
      title: '8',
    },
    {
      img: 'https://sun9-80.userapi.com/impg/up_EcCy6xo1CJxd7phXXGB450MTQsTggds58rA/asRGqSfsjiQ.jpg?size=1439x2160&quality=95&sign=1cb51677d903c6109ffa170520b8e881&type=album',
      title: '9',
    },
    {
      img: 'https://sun9-43.userapi.com/impg/HcrVgr9eIPGxm5nit22nKk28TSK2hilzwzQjUQ/w77gVo3FHsg.jpg?size=1440x2160&quality=95&sign=f6ee9c207eb4229034235a7f34171d2b&type=album',
      title: '10',
    },
    {
      img: 'https://sun9-27.userapi.com/impg/nPAZi4cgLEWUO88SmHfy9pe8dzeuX10NPX3g5A/5qEwi9fg_YU.jpg?size=1440x2160&quality=95&sign=38d99bf295345b97b14ffb3c0852265d&type=album',
      title: '11',
    },
    {
      img: 'https://sun9-43.userapi.com/impg/R7c6_IFiMzYgiVVV4ZrL8PP2pfIf9Ohl5pctRQ/W8ZK6qAr7NA.jpg?size=1440x2160&quality=95&sign=5cde122ae3f8c38a24cc6ebe84925f51&type=album',
      title: '12',
    },
  ];
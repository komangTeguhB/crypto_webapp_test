import React from 'react'
import nftIcon from './../assets/nft.png'
import defiIcon from './../assets/bank.png'
import newIcon from './../assets/star.jpg'
import cexIcon from './../assets/cex.svg'
import dexIcon from './../assets/transfer.png'
import layer1Icon from './../assets/layer.png'
import layer2Icon from './../assets/layer-2.png'
import infrastructure from './../assets/infrastructure.png'
import stableIcon from './../assets/stable.png'
import lendingIcon from './../assets/lending.png'

export const filters = [
  {
    icon: <img src={newIcon} alt='icon' width={24} height={24}></img>,
    label: 'Terbaru'
  },
  {
    icon: <img src={defiIcon} alt='icon' width={24} height={24}></img>,
    label: 'Defi'
  },
  {
    icon: <img src={nftIcon} alt='icon' width={24} height={24}></img>,
    label: 'NFT/Gaming'
  },
  {
    icon: <img src={cexIcon} alt='icon' width={24} height={24}></img>,
    label: 'CEX'
  },
  {
    icon: <img src={dexIcon} alt='icon' width={24} height={24}></img>,
    label: 'DEX'
  },
  {
    icon: <img src={layer1Icon} alt='icon' width={24} height={24}></img>,
    label: 'Layer-1'
  },
  {
    icon: <img src={infrastructure} alt='icon' width={24} height={24}></img>,
    label: 'Infrastructure'
  },
  {
    icon: <img src={lendingIcon} alt='icon' width={24} height={24}></img>,
    label: 'Lending'
  },
  {
    icon: <img src={layer2Icon} alt='icon' width={24} height={24}></img>,
    label: 'Layer-2'
  },
  {
    icon: <img src={stableIcon} alt='icon' width={24} height={24}></img>,
    label: 'Ekosistem Stablecoin'
  }
]

import khlib from '@/shared/assets/images/partner-khlib.png'
import nix from '@/shared/assets/images/partner-nix.png'
import novaposhta from '@/shared/assets/images/partner-novaposhta.png'
import ukroboronprom from '@/shared/assets/images/partner-ukroboronprom.png'
import type { Partner } from './types'

/** «Друзья Signy» */
export const PARTNERS: Partner[] = [
  { id: 'ukroboronprom', name: 'Укроборонпром', logo: ukroboronprom },
  { id: 'novaposhta', name: 'Нова пошта', logo: novaposhta },
  { id: 'nix', name: 'N-iX', logo: nix },
  { id: 'khlib', name: 'Просто добрий хліб', logo: khlib },
]

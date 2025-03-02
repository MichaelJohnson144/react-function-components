export const containedStyles = new Map<string, string>([
  ['vanilla', ''],
  [
    'default',
    'bg-gray-950/10 text-gray-950 hover:bg-gray-950/15 dark:bg-white/10 dark:text-white hover:dark:bg-white/15',
  ],
  [
    'primary',
    'bg-[#1976D2] text-white hover:bg-[#1565C0] dark:bg-[#90CAF9] dark:text-gray-950 hover:dark:bg-[#42A5F5]',
  ],
  [
    'secondary',
    'bg-[#9C27B0] text-white hover:bg-[#7B1FA2] dark:bg-[#CE93D8] dark:text-gray-950 hover:dark:bg-[#AB47BC]',
  ],
  [
    'success',
    'bg-[#2E7D32] text-white hover:bg-[#1B5E20] dark:bg-[#66BB6A] dark:text-gray-950 hover:dark:bg-[#388E3C]',
  ],
  ['error', 'bg-[#D32F2F] text-white hover:bg-[#C62828] dark:bg-[#F44336] hover:dark:bg-[#D32F2F]'],
  ['info', 'bg-[#0288D1] text-white hover:bg-[#01579B] dark:bg-[#29B6F6] dark:text-gray-950 hover:dark:bg-[#0288D1]'],
  ['warning', 'bg-[#FEDD00] text-gray-950 hover:bg-[#D1B000]'],
  ['disabled', 'bg-gray-950/10 text-gray-950/15 dark:bg-white/10 dark:text-white/30'],
]);

export const outlinedStyles = new Map<string, string>([
  ['vanilla', ''],
  [
    'default',
    'text-gray-950 outline-gray-950/30 hover:bg-gray-950/5 hover:outline-gray-950/60 dark:text-white dark:outline-white/50 hover:dark:bg-white/5 hover:dark:outline-white',
  ],
  [
    'primary',
    'text-[#1976D2] outline-[#1976D2]/50 hover:bg-[#42A5F5]/5 hover:outline-[#1976D2] dark:text-[#90CAF9] dark:outline-[#90CAF9]/50 hover:dark:bg-[#E3F2FD]/5 hover:dark:outline-[#90CAF9]',
  ],
  [
    'secondary',
    'text-[#9C27B0] outline-[#9C27B0]/50 hover:bg-[#BA68C8]/5 hover:outline-[#9C27B0] dark:text-[#CE93D8] dark:outline-[#CE93D8]/50 hover:dark:bg-[#F3E5F5]/5 hover:dark:outline-[#CE93D8]',
  ],
  [
    'success',
    'text-[#2E7D32] outline-[#2E7D32]/50 hover:bg-[#4CAF50]/5 hover:outline-[#2E7D32] dark:text-[#66BB6A] dark:outline-[#66BB6A]/50 hover:dark:bg-[#81C784]/5 hover:dark:outline-[#66BB6A]',
  ],
  [
    'error',
    'text-[#D32F2F] outline-[#D32F2F]/50 hover:bg-[#EF5350]/5 hover:outline-[#D32F2F] dark:text-[#F44336] dark:outline-[#F44336]/50 hover:dark:bg-[#E57373]/5 hover:dark:outline-[#F44336]',
  ],
  [
    'info',
    'text-[#0288D1] outline-[#0288D1]/50 hover:bg-[#03A9FA]/5 hover:outline-[#0288D1] dark:text-[#29B6F6] dark:outline-[#29B6F6]/50 hover:dark:bg-[#4FC3F7]/5 hover:dark:outline-[#29B6F6]',
  ],
  ['warning', 'text-[#D1B000] outline-[#FEDD00]/50 hover:bg-[#D1B000]/5 hover:outline-[#D1B000]'],
  ['disabled', 'text-gray-950/15 outline-gray-950/10 dark:text-white/30 dark:outline-white/10'],
]);

export const textStyles = new Map<string, string>([
  ['vanilla', ''],
  ['default', 'text-gray-950 hover:bg-gray-950/5 dark:text-white hover:dark:bg-white/5'],
  ['primary', 'text-[#1976D2] hover:bg-[#42A5F5]/5 dark:text-[#90CAF9] hover:dark:bg-[#E3F2FD]/5'],
  ['secondary', 'text-[#9C27B0] hover:bg-[#BA68C8]/5 dark:text-[#CE93D8] hover:dark:bg-[#F3E5F5]/5'],
  ['success', 'text-[#2E7D32] hover:bg-[#4CAF50]/5 dark:text-[#66BB6A] hover:dark:bg-[#81C784]/5'],
  ['error', 'text-[#D32F2F] hover:bg-[#EF5350]/5 dark:text-[#F44336] hover:dark:bg-[#E57373]/5'],
  ['info', 'text-[#0288D1] hover:bg-[#03A9FA]/5 dark:text-[#29B6F6] hover:dark:bg-[#4FC3F7]/5'],
  ['warning', 'text-[#D1B000] hover:bg-[#D1B000]/5 hover:dark:bg-[#FEDD00]/5'],
  ['disabled', 'text-gray-950/15 dark:text-white/30'],
]);

export const containedRippleStyles = new Map<string, string | null>([
  ['vanilla', ''],
  ['default', 'bg-[#212121] dark:bg-white'],
  ['primary', 'bg-white dark:bg-gray-950'],
  ['secondary', 'bg-white dark:bg-gray-950'],
  ['success', 'bg-white dark:bg-gray-950'],
  ['error', 'bg-white'],
  ['info', 'bg-white dark:bg-gray-950'],
  ['warning', 'bg-white dark:bg-gray-950'],
  ['disabled', ''],
]);

export const outlinedRippleStyles = new Map<string, string | null>([
  ['vanilla', ''],
  ['default', 'bg-[#212121] dark:bg-white'],
  ['primary', 'bg-[#1565C0] dark:bg-[#90CAF9]'],
  ['secondary', 'bg-[#7B1FA2] dark:bg-[#CE93D8]'],
  ['success', 'bg-[#1B5E20] dark:bg-[#66BB6A]'],
  ['error', 'bg-[#C62828] dark:bg-[#F44336]'],
  ['info', 'bg-[#01579B] dark:bg-[#29B6F6]'],
  ['warning', 'bg-[#D1B000] dark:bg-[#FEDD00]'],
  ['disabled', ''],
]);

export const textRippleStyles = new Map<string, string | null>([
  ['vanilla', ''],
  ['default', 'bg-[#212121] dark:bg-white'],
  ['primary', 'bg-[#1565C0] dark:bg-[#90CAF9]'],
  ['secondary', 'bg-[#7B1FA2] dark:bg-[#CE93D8]'],
  ['success', 'bg-[#1B5E20] dark:bg-[#66BB6A]'],
  ['error', 'bg-[#C62828] dark:bg-[#F44336]'],
  ['info', 'bg-[#01579B] dark:bg-[#29B6F6]'],
  ['warning', 'bg-[#D1B000] dark:bg-[#FEDD00]'],
  ['disabled', ''],
]);

var canIWin = function (maxn, total) {
    if (total === 0) return true; // no total, so first player wins without taking turn

    let sumn = (maxn * (maxn + 1)) / 2;
    if (sumn < total) return false; // sum can't reach total, impossible game, so first player can-not win

    let masks = new Array(1 << maxn); // 2^maxn = max 2^20 = 1,048,576, a million variable array
    let bitMaskmaxn = (1 << maxn) - 1;

    function solve(currentMask, total) {
        if (currentMask <= 0) return false; // current player lost - cant play
        if (total <= 0) return false; // current player lost - cant play
        if (masks[currentMask] !== undefined) return masks[currentMask];

        for (let n = 1, bitMask = 1; n <= maxn && bitMask <= currentMask; ++n, bitMask = bitMask << 1) {
            let nNotTaken = currentMask & bitMask; // take n  if not taken
            if (nNotTaken) {
                let currentMaskWithoutN = currentMask ^ bitMask;
                let totalWithoutN = total - n;
                if (!solve(currentMaskWithoutN, totalWithoutN)) {
                    return (masks[currentMask] = true); // other player won, so current player loses
                }
            }
        }
        return (masks[currentMask] = false); // current player won
    }

    return solve(bitMaskmaxn, total); // '1111 1111 1111 1111 1111', 11
};
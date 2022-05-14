/*
 * @lc app=leetcode id=1396 lang=typescript
 *
 * [1396] Design Underground System
 */

// @lc code=start
class UndergroundSystem {
    private stationTravalTimeMap: Map<string, Array<number>>;
    private checkInIDStationTimeMap: Map<number, IStationTime>;

    constructor() {
        this.stationTravalTimeMap = new Map<string, Array<number>>();
        this.checkInIDStationTimeMap = new Map<number, IStationTime>();
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.checkInIDStationTimeMap.set(id, {
            station: stationName,
            time: t
        });
    }

    checkOut(id: number, stationName: string, t: number): void {
        const startInformation: IStationTime = this.checkInIDStationTimeMap.get(id);
        const key: string = startInformation.station + '>' + stationName;
        this.stationTravalTimeMap.set(key,
            this.stationTravalTimeMap.has(key) ?
                [...this.stationTravalTimeMap.get(key), t - startInformation.time] :
                [t - startInformation.time]
        );
        this.checkInIDStationTimeMap.delete(id);
    }

    getAverageTime(startStation: string, endStation: string): number {
        const travalTimes: Array<number> =
            this.stationTravalTimeMap.get(startStation + '>' + endStation);
        return travalTimes.reduce((a, b) => a + b) / travalTimes.length;
    }
}

interface IStationTime {
    station: string;
    time: number;
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end


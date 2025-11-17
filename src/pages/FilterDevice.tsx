import type { FunctionComponent, useCallback } from 'react';
import styles from './FilterDevice.module.css';


const FilterDevice = () => {
  	
  	// const onNextPageButtonContainerClick = useCallback(() => {
    // 		// Add your code here
  	// }, []);
  	
  	return (
    		<div className={styles.filterDevice}>
      			<div className={styles.body}>
        				<div className={styles.deviceList}>
          					<div className={styles.segmentedControl}>
            						<div className={styles.selectIphone}>
              							<div className={styles.div}>아이폰</div>
            						</div>
            						<div className={styles.selectGalaxy}>
              							<div className={styles.filterDeviceDiv}>갤럭시</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 17 Pro Max</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild} />
                  									<div className={styles.deviceColorPaletteItem} />
                  									<div className={styles.deviceColorPaletteInner} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 17 Pro</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild} />
                  									<div className={styles.deviceColorPaletteItem} />
                  									<div className={styles.deviceColorPaletteInner} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 17 Air</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild3} />
                  									<div className={styles.deviceColorPaletteChild4} />
                  									<div className={styles.deviceColorPaletteChild5} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 17</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild7} />
                  									<div className={styles.deviceColorPaletteChild8} />
                  									<div className={styles.deviceColorPaletteChild9} />
                  									<div className={styles.deviceColorPaletteChild5} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 16 Pro Max</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild12} />
                  									<div className={styles.deviceColorPaletteChild13} />
                  									<div className={styles.deviceColorPaletteInner} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 16 Pro</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild12} />
                  									<div className={styles.deviceColorPaletteChild13} />
                  									<div className={styles.deviceColorPaletteInner} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 16 +</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild20} />
                  									<div className={styles.deviceColorPaletteChild21} />
                  									<div className={styles.deviceColorPaletteChild22} />
                  									<div className={styles.deviceColorPaletteChild5} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.deviceIphone17ProMax}>
            						<div className={styles.deviceFilterCard}>
              							<div className={styles.img} />
              							<div className={styles.contents}>
                								<div className={styles.deviceName}>아이폰 16</div>
                								<div className={styles.deviceColorPalette}>
                  									<div className={styles.deviceColorPaletteChild20} />
                  									<div className={styles.deviceColorPaletteChild21} />
                  									<div className={styles.deviceColorPaletteChild22} />
                  									<div className={styles.deviceColorPaletteChild5} />
                  									<div className={styles.deviceColorPaletteChild6} />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.header}>
        				<div className={styles.filterDevicePageDescription}>
          					<div className={styles.pageDescription}>
            						<div className={styles.goBack} />
            						<div className={styles.contents8}>
              							<div className={styles.title}>사용할 기종을 선택해주세요!</div>
              							<div className={styles.subTitle}>요정이 최저가로 찾아줄게요!</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.bottomfadeareaIndicator}>
        				<div className={styles.progressIndicator}>
          					<div className={styles.processLevel1} />
          					<div className={styles.processLevel2} />
          					<div className={styles.processLevel2} />
        				</div>
        				<div className={styles.nextpageButton} /*onClick={onNextPageButtonContainerClick}*/>
          					<div className={styles.deviceName}>다음으로</div>
        				</div>
      			</div>
    		</div>);
};

export default FilterDevice as FunctionComponent;

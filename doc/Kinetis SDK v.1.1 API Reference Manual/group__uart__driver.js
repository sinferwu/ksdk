var group__uart__driver =
[
    [ "uart_state_t", "group__uart__driver.html#structuart__state__t", [
      [ "txFifoEntryCount", "group__uart__driver.html#afebb0cf1a2dd6999095b95d92fa0c3ee", null ],
      [ "txBuff", "group__uart__driver.html#a119f9c767f4491ed8559b37b8e6a571b", null ],
      [ "rxBuff", "group__uart__driver.html#a880a4abed8e62138e0cd7db8aedd52d0", null ],
      [ "txSize", "group__uart__driver.html#a84282fc882829efbb540222b2725ad31", null ],
      [ "rxSize", "group__uart__driver.html#a6d94c1b0693feb0f1200fa08a5f641fb", null ],
      [ "isTxBusy", "group__uart__driver.html#a5f7c8c370af445a9d1885a6c11525cea", null ],
      [ "isRxBusy", "group__uart__driver.html#a1920fcb81832ed37188236804f434ee4", null ],
      [ "isTxBlocking", "group__uart__driver.html#abb38f8524c76afff1b9e7dbfa6332fbc", null ],
      [ "isRxBlocking", "group__uart__driver.html#af92d4a274d98a8791222b64d827d6ae1", null ],
      [ "txIrqSync", "group__uart__driver.html#a4f39a3d36101e82f0f6723e6a63cb8a0", null ],
      [ "rxIrqSync", "group__uart__driver.html#a016890b94772567dd3a50535ba87e519", null ],
      [ "rxCallback", "group__uart__driver.html#a86a82e7369c28e59ff3ba6fc349dade7", null ],
      [ "rxCallbackParam", "group__uart__driver.html#a7fd3c81aad7825740a23e2c711450d45", null ]
    ] ],
    [ "uart_user_config_t", "group__uart__driver.html#structuart__user__config__t", [
      [ "baudRate", "group__uart__driver.html#ad516b67062f5699b71a2ae3db9a79f98", null ],
      [ "parityMode", "group__uart__driver.html#aa297e8062d620788fa6cc02d3bade40a", null ],
      [ "stopBitCount", "group__uart__driver.html#a515c586a96cbeaa1a16b51cc4d27d078", null ],
      [ "bitCountPerChar", "group__uart__driver.html#a0f5740d31cf13267e9ea16ef8f857c60", null ]
    ] ],
    [ "uart_edma_state_t", "group__uart__driver.html#structuart__edma__state__t", [
      [ "isTxBusy", "group__uart__driver.html#a3882c660a7df425c3f9d2eeb1c17b2d1", null ],
      [ "isRxBusy", "group__uart__driver.html#a1b7d5892288730bddaaebf00add0b85c", null ],
      [ "isTxBlocking", "group__uart__driver.html#a89d2e861c479e73b390adcbae03cdc9c", null ],
      [ "isRxBlocking", "group__uart__driver.html#a946087683cd9bc25863505fdbb02a4bd", null ],
      [ "txIrqSync", "group__uart__driver.html#a4ef8f22b260f4877725e715b8c168cc2", null ],
      [ "rxIrqSync", "group__uart__driver.html#a2d4e4f0fd232a52de519919db66089fd", null ],
      [ "edmaUartTx", "group__uart__driver.html#a275ce0113e9f583fa6c5fc17553bedef", null ],
      [ "edmaUartRx", "group__uart__driver.html#aa880672242734dd772f988e40633cca5", null ]
    ] ],
    [ "uart_edma_user_config_t", "group__uart__driver.html#structuart__edma__user__config__t", [
      [ "baudRate", "group__uart__driver.html#a771e0e38a37476f136287d5e247fa460", null ],
      [ "parityMode", "group__uart__driver.html#adcdfe08625f13d793aa23e77a725bedc", null ],
      [ "stopBitCount", "group__uart__driver.html#a00a9f6702ab45efc3a0b9d45e35580fc", null ],
      [ "bitCountPerChar", "group__uart__driver.html#a16719f02fcf693a6de3481030c5e9ca3", null ]
    ] ],
    [ "uart_rx_callback_t", "group__uart__driver.html#gab9f6e32a3f8393c9b44265bc306d6251", null ],
    [ "UART_DRV_Init", "group__uart__driver.html#ga588680e1275ab5b98aacfbb90aee8f99", null ],
    [ "UART_DRV_Deinit", "group__uart__driver.html#ga16ac846ba7cabe7634a8b77be4042372", null ],
    [ "UART_DRV_InstallRxCallback", "group__uart__driver.html#ga46806b62148493d3841610b441346408", null ],
    [ "UART_DRV_SendDataBlocking", "group__uart__driver.html#ga2278d7864b7381973f5cf45e63f1248b", null ],
    [ "UART_DRV_SendData", "group__uart__driver.html#ga0eae402145cd798e8173148aa50dc5a4", null ],
    [ "UART_DRV_GetTransmitStatus", "group__uart__driver.html#ga167b2ec289daf07812e0cd72dec5fe72", null ],
    [ "UART_DRV_AbortSendingData", "group__uart__driver.html#ga830585043a238d7226335d90c7bce1e4", null ],
    [ "UART_DRV_ReceiveDataBlocking", "group__uart__driver.html#gae54d95d43b1a338eb16b16c424f665c0", null ],
    [ "UART_DRV_ReceiveData", "group__uart__driver.html#ga4cca3b5bb78a8d7ff120762e1667c144", null ],
    [ "UART_DRV_GetReceiveStatus", "group__uart__driver.html#gaa83d6037e5223abbe7d2e29cfbe48d75", null ],
    [ "UART_DRV_AbortReceivingData", "group__uart__driver.html#gaf501580a6eb4f3cfde1e104bebecc40d", null ],
    [ "UART_DRV_EdmaInit", "group__uart__driver.html#gacd31cc5cbb0430ee9b5fe23685a2536e", null ],
    [ "UART_DRV_EdmaDeinit", "group__uart__driver.html#ga01c56ef37c725801afb30c531d048fe9", null ],
    [ "UART_DRV_EdmaSendDataBlocking", "group__uart__driver.html#ga0d7f464eaa4a0bab6632b659ea82ae55", null ],
    [ "UART_DRV_EdmaSendData", "group__uart__driver.html#ga7528d3696e8e7fb4d4a919c3e3912a0f", null ],
    [ "UART_DRV_EdmaGetTransmitStatus", "group__uart__driver.html#gab1f023df2c30fee69009e87919e7ba44", null ],
    [ "UART_DRV_EdmaAbortSendingData", "group__uart__driver.html#ga149981c7310024e586ddc7fe2a89c1a3", null ],
    [ "UART_DRV_EdmaReceiveDataBlocking", "group__uart__driver.html#gaa0638a1c1626a631a25f5d9c106d83b6", null ],
    [ "UART_DRV_EdmaReceiveData", "group__uart__driver.html#ga791f459e4313752044e2296330a1ea04", null ],
    [ "UART_DRV_EdmaGetReceiveStatus", "group__uart__driver.html#ga1b92f3c8ff0baa1e6b3a45f6f37ccdd0", null ],
    [ "UART_DRV_EdmaAbortReceivingData", "group__uart__driver.html#ga05cfaf54b9544d11162e75a05e21c141", null ],
    [ "g_uartBaseAddr", "group__uart__driver.html#ga601b4438c33d821d0f868316ef095ff4", null ],
    [ "g_uartRxTxIrqId", "group__uart__driver.html#gabdc43038de03cc549be8a99cd8cf5ada", null ],
    [ "g_uartBaseAddr", "group__uart__driver.html#ga601b4438c33d821d0f868316ef095ff4", null ]
];
export default {
  methods: {
    getNoteMessage(messages, item, username){
      if(item.sourceType === 'box'){
        return messages.youOpened
      }
    
      if(item.sourceId == username){
        if(item.action === 'purchase'){
          return messages.youBought
        }
      }else{
        if(item.action === 'like'){
          return messages.someoneLiked
        }else if(item.action === 'purchase'){
          return messages.someoneBought
        }
      }
    }
  }
}
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

// 顶部操作栏组件
const TopBar = () => {
  return (
    <View style={styles.topBar}>
      {/* 月份选择器和设置按钮将在这里实现 */}
      <Text>Test</Text>
    </View>
  );
};

// 支出统计区域组件
const StatisticsArea = () => {
  return (
    <View style={styles.statisticsArea}>
      {/* 总支出和分类比例图将在这里实现 */}
    </View>
  );
};

// 支出记录列表组件
const ExpenseList = () => {
  return (
    <View style={styles.expenseList}>
      {/* 支出记录列表将在这里实现 */}
    </View>
  );
};

// 快速记账按钮组件
const QuickAddButton = () => {
  return (
    <View style={styles.quickAddButton}>
      {/* 悬浮按钮将在这里实现 */}
    </View>
  );
};

// 主页面组件
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TopBar />
      <StatisticsArea />
      <ExpenseList />
      <QuickAddButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 56,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statisticsArea: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  expenseList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  quickAddButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default MainScreen;
